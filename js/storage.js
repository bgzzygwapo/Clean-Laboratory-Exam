// storage.js - module to manage persistence (localStorage)

export function getItems(){
  try{
    const raw = localStorage.getItem('exam_items');
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    console.error('getItems error', e);
    return [];
  }
}

export function saveItem(text){
  try{
    const items = getItems();
    const item = { id: Date.now(), text: String(text) };
    items.push(item);
    localStorage.setItem('exam_items', JSON.stringify(items));
    return item;
  }catch(e){
    console.error('saveItem error', e);
    return null;
  }
}

export function deleteItem(id){
  try{
    const items = getItems().filter(it => it.id !== id);
    localStorage.setItem('exam_items', JSON.stringify(items));
    return items;
  }catch(e){
    console.error('deleteItem error', e);
    return [];
  }
}

export function clearItems(){
  try{
    localStorage.removeItem('exam_items');
  }catch(e){
    console.error('clearItems error', e);
  }
}
