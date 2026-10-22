import {apps,panelGroups,owners} from './data.js';
const imageInfo = await fetch('./assets/images.json').then(r=>{if(!r.ok)throw new Error('Image inventory unavailable');return r.json()});
const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node};
const imagePath=(slug)=>`./assets/${slug}.webp`;
let lightboxViews=[], lightboxIndex=0;
const dialog=document.querySelector('#image-dialog');
const lightboxImage=document.querySelector('#lightbox-image');
const stage=document.querySelector('.lightbox-stage');
const pixelToggle=document.querySelector('#pixel-toggle');

function resetPixelView(){stage.classList.remove('pixel-view');pixelToggle.textContent='View at 1:1';pixelToggle.setAttribute('aria-pressed','false')}
function renderLightbox(){
 const [slug,title,caption]=lightboxViews[lightboxIndex],info=imageInfo[slug];
 lightboxImage.src=imagePath(slug);lightboxImage.alt=caption;lightboxImage.style.setProperty('--native-width',`${info.width}px`);lightboxImage.style.setProperty('--native-height',`${info.height}px`);
 document.querySelector('#lightbox-title').textContent=title;
 document.querySelector('#lightbox-caption').textContent=caption;
 const download=document.querySelector('#image-download');download.href=imagePath(slug);download.download=`dandesk-${slug}.webp`;
 document.querySelector('#view-counter').textContent=`${lightboxIndex+1} / ${lightboxViews.length}`;
 document.querySelector('#previous-image').disabled=lightboxViews.length<2;document.querySelector('#next-image').disabled=lightboxViews.length<2;
 resetPixelView();
}
function openImage(views,index=0){lightboxViews=views;lightboxIndex=index;renderLightbox();dialog.showModal()}
function changeLightbox(delta){lightboxIndex=(lightboxIndex+delta+lightboxViews.length)%lightboxViews.length;renderLightbox()}
document.querySelector('#close-lightbox').addEventListener('click',()=>dialog.close());
document.querySelector('#previous-image').addEventListener('click',()=>changeLightbox(-1));
document.querySelector('#next-image').addEventListener('click',()=>changeLightbox(1));
pixelToggle.addEventListener('click',()=>{const active=stage.classList.toggle('pixel-view');pixelToggle.textContent=active?'Fit to view':'View at 1:1';pixelToggle.setAttribute('aria-pressed',String(active));stage.scrollTo(0,0)});
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()}});
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();changeLightbox(event.key==='ArrowRight'?1:-1)}});
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>openImage([[button.dataset.image,'The live DanDesk desktop',button.dataset.caption]])));

function addTabKeyboard(container){
 container.addEventListener('keydown',event=>{
  if(!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const tabs=[...container.querySelectorAll('[role=tab]')],current=tabs.indexOf(document.activeElement);if(current<0)return;
  event.preventDefault();let index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(current+(['ArrowDown','ArrowRight'].includes(event.key)?1:-1)+tabs.length)%tabs.length;
  const root=container.closest('.explorer'),kind=container.classList.contains('view-tabs')?'.view-tabs':'.explorer-nav';
  tabs[index].click();root.querySelectorAll(`${kind} [role=tab]`)[index]?.focus();
 });
}

function makeExplorer(root,items,{groups=null}={}){
 let selection=items[0],viewIndex=0,currentItems=items,currentGroup=groups?.[0];
 let groupBar;
 if(groups){groupBar=el('div','group-tabs');groupBar.setAttribute('aria-label','Desktop component groups');root.append(groupBar)}
 const nav=el('div','explorer-nav');nav.setAttribute('role','tablist');nav.setAttribute('aria-label',groups?'Desktop components':'DanDesk applications');nav.setAttribute('aria-orientation','vertical');
 const main=el('div','explorer-main');main.id=`${root.id}-content`;main.setAttribute('role','tabpanel');root.append(nav,main);addTabKeyboard(nav);

 function renderNav(){
  nav.replaceChildren();nav.append(el('span','nav-label',groups?currentGroup.name:'Native applications'));
  if(groups)nav.append(el('p','group-description',currentGroup.description));
  currentItems.forEach(item=>{
   const button=el('button','component-tab');button.type='button';button.id=`${root.id}-${item.id}`;button.setAttribute('role','tab');button.setAttribute('aria-controls',main.id);button.setAttribute('aria-selected',String(selection.id===item.id));button.tabIndex=selection.id===item.id?0:-1;
   const icon=el('span','tab-icon',item.icon);icon.setAttribute('aria-hidden','true');const arrow=el('span','tab-arrow','↗');arrow.setAttribute('aria-hidden','true');button.append(icon,el('span','',item.name),arrow);
   button.addEventListener('click',()=>{selection=item;viewIndex=0;renderNav();renderMain()});nav.append(button);
  });
 }
 function renderMain(){
  main.replaceChildren();main.setAttribute('aria-labelledby',`${root.id}-${selection.id}`);
  main.append(el('div','component-kicker',selection.kicker||(groups?currentGroup.description.toUpperCase():'NATIVE DANDESK TOOL')));
  main.append(el('h3','component-title',selection.name),el('p','component-description',selection.description));
  if(selection.tags){const tags=el('div','component-tags');selection.tags.forEach(tag=>tags.append(el('span','',tag)));main.append(tags)}
  const tabs=el('div','view-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label',`${selection.name} views`);
  const imageArea=el('div','image-area');imageArea.id=`${root.id}-image`;
  selection.views.forEach((view,index)=>{const tab=el('button','view-tab',view[1]);tab.type='button';tab.setAttribute('role','tab');tab.setAttribute('aria-controls',imageArea.id);tab.setAttribute('aria-selected',String(index===viewIndex));tab.tabIndex=index===viewIndex?0:-1;tab.addEventListener('click',()=>{viewIndex=index;renderMain()});tabs.append(tab)});addTabKeyboard(tabs);main.append(tabs,imageArea);
  const [slug,title,caption]=selection.views[viewIndex],info=imageInfo[slug];
  const button=el('button','screen-button');button.type='button';button.setAttribute('aria-label',`Enlarge ${selection.name}: ${title}`);
  const img=el('img');img.src=imagePath(slug);img.alt=caption;img.width=info.width;img.height=info.height;img.loading='lazy';img.decoding='async';
  const zoom=el('span','enlarge-tag','Open full view ↗');button.append(img,zoom);button.addEventListener('click',()=>openImage(selection.views.map(([slug,title,caption])=>[slug,`${selection.name} · ${title}`,caption]),viewIndex));
  const foot=el('div','screen-caption');foot.append(el('p','',caption),el('span','',`${viewIndex+1} / ${selection.views.length} VIEWS`));imageArea.append(button,foot);
 }
 if(groups){groups.forEach(group=>{const button=el('button','group-tab',group.name);button.type='button';button.dataset.group=group.id;button.setAttribute('aria-pressed',String(currentGroup.id===group.id));button.addEventListener('click',()=>{currentGroup=group;currentItems=group.items;selection=currentItems[0];viewIndex=0;groupBar.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.group===group.id)));renderNav();renderMain()});groupBar.append(button)})}
 renderNav();renderMain();
}
makeExplorer(document.querySelector('#app-explorer'),apps);
makeExplorer(document.querySelector('#panel-explorer'),panelGroups[0].items,{groups:panelGroups});
const ownerMap=document.querySelector('#owner-map');owners.forEach(([name,description])=>{const row=el('dl','owner-row');row.append(el('dt','',name),el('dd','',description));ownerMap.append(row)});
