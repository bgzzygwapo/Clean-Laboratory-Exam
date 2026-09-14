import { getItems, saveItem, deleteItem, clearItems } from './storage.js';

const form = document.getElementById('exam-form');
const input = document.getElementById('item-input');
const list = document.getElementById('item-list');
const clearBtn = document.getElementById('clear-btn');

// Render saved items to the list
export function renderItems(){
  try{
    const items = getItems();
    list.innerHTML = '';
    if(!items || items.length === 0){
      const el = document.createElement('li');
      el.className = 'item';
      el.textContent = 'No items yet.';
      list.appendChild(el);
      return;
    }

    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'item';
      const span = document.createElement('span');
      span.className = 'text';
      span.textContent = item.text;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = 'Delete';
      btn.addEventListener('click', () => {
        deleteItem(item.id);
        renderItems();
      });

      li.appendChild(span);
      li.appendChild(btn);
      list.appendChild(li);
    });
  }catch(err){
    // Keep console debugging friendly
    console.error('renderItems error', err);
  }
}

function handleSubmit(ev){
  ev.preventDefault();
  const value = input.value && input.value.trim();
  if(!value){
    // simple inline validation without alerts to avoid blocking tests
    input.setAttribute('aria-invalid','true');
    input.focus();
    return;
  }
  input.removeAttribute('aria-invalid');
  saveItem(value);
  input.value = '';
  renderItems();
}

form.addEventListener('submit', handleSubmit);
clearBtn.addEventListener('click', () => {
  clearItems();
  renderItems();
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  renderItems();
});
