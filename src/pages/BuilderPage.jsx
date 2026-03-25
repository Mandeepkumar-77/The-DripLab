import React, { useState } from 'react';
import './Pages.css';

import f1Banana from '../assets/items/f1_banana.png';
import f2Strawberry from '../assets/items/f2_strawberry.png';
import f3Mango from '../assets/items/f3_mango.png';
import f4Blueberry from '../assets/items/f4_blueberry.png';
import b1Milk from '../assets/items/b1_milk.png';
import b2Almond from '../assets/items/b2_almond.png';
import b3Oat from '../assets/items/b3_oat.png';
import b4Coconut from '../assets/items/b4_coconut.png';

import s1NoSugar from '../assets/items/s1_nosugar.png';
import s2Honey from '../assets/items/s2_honey.png';
import s3Stevia from '../assets/items/s3_stevia.png';
import s4Sugar from '../assets/items/s4_sugar.png';

import t1Chia from '../assets/items/t1_chia.png';
import t2Whey from '../assets/items/t2_whey.png';
import t3Cocoa from '../assets/items/t3_cocoa.png';
import t4None from '../assets/items/t4_none.png';

const OPTIONS = {
  bases: [
    { id: 'b1', name: 'Whole Milk', price: 40, image: b1Milk, bgColor: '#fdfbf7' },
    { id: 'b2', name: 'Almond Milk', price: 60, image: b2Almond, bgColor: '#f5ecd8' },
    { id: 'b3', name: 'Oat Milk', price: 65, image: b3Oat, bgColor: '#e8ddcb' },
    { id: 'b4', name: 'Coconut Water', price: 50, image: b4Coconut, bgColor: '#e0f7fa' },
  ],
  fruits: [
    { id: 'f1', name: 'Banana', price: 30, image: f1Banana, bgColor: '#fff9c4' },
    { id: 'f2', name: 'Strawberry', price: 50, image: f2Strawberry, bgColor: '#ffcdd2' },
    { id: 'f3', name: 'Mango', price: 60, image: f3Mango, bgColor: '#ffe082' },
    { id: 'f4', name: 'Blueberry', price: 70, image: f4Blueberry, bgColor: '#c5cae9' },
  ],
  sugars: [
    { id: 's1', name: 'No Sugar', price: 0, image: s1NoSugar, bgColor: '#f5f5f5' },
    { id: 's2', name: 'Honey', price: 20, image: s2Honey, bgColor: '#ffecb3' },
    { id: 's3', name: 'Stevia', price: 15, image: s3Stevia, bgColor: '#c8e6c9' },
    { id: 's4', name: 'Regular', price: 10, image: s4Sugar, bgColor: '#eeeeee' },
  ],
  toppings: [
    { id: 't1', name: 'Chia Seeds', price: 25, image: t1Chia, bgColor: '#d7ccc8' },
    { id: 't2', name: 'Whey Protein', price: 80, image: t2Whey, bgColor: '#cfd8dc' },
    { id: 't3', name: 'Cocoa Nibs', price: 40, image: t3Cocoa, bgColor: '#795548' },
    { id: 't4', name: 'None', price: 0, image: t4None, bgColor: '#f5f5f5' },
  ]
};

export default function BuilderPage({ navigateTo, addToCart }) {
  const [selected, setSelected] = useState({
    base: null,
    fruit: null,
    sugar: null,
    topping: null
  });

  const isComplete = selected.base && selected.fruit && selected.sugar && selected.topping;
  const totalPrice = isComplete 
    ? selected.base.price + selected.fruit.price + selected.sugar.price + selected.topping.price 
    : 0;

  const selectOption = (category, item) => {
    setSelected(prev => ({ ...prev, [category]: item }));
  };

  const handleAddToCart = () => {
    if (!isComplete) return;
    addToCart({
      id: `custom-${Date.now()}`,
      name: `Custom ${selected.fruit.name} Drip`,
      desc: `${selected.base.name}, ${selected.sugar.name}, ${selected.topping.name !== 'None' ? selected.topping.name : 'No Topping'}`,
      price: totalPrice,
      icon: '✨'
    });
    navigateTo('home');
  };

  const SliderSection = ({ title, category, optionsList }) => (
    <div className="builder-section">
      <h3 className="builder-title">{title}</h3>
      <div className="slider-container">
        {optionsList.map(item => {
          const isSelected = selected[category] && selected[category].id === item.id;
          return (
            <div 
              key={item.id} 
              className={`builder-option ${isSelected ? 'selected' : ''}`}
              onClick={() => selectOption(category, item)}
            >
              <div 
                className="builder-option-img"
                style={!isSelected ? { backgroundColor: item.bgColor, padding: item.image ? 0 : '', overflow: 'hidden' } : { padding: item.image ? 0 : '', overflow: 'hidden' }}
              >
                {item.image ? (
                  <img src={item.image} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                ) : (
                  item.icon
                )}
              </div>
              <span className="builder-option-label">{item.name} <br/>(₹{item.price})</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="page-container animate-fade-in-up" style={{ paddingBottom: '140px' }}>
      <div className="section" style={{marginBottom: 0}}>
        <h2 className="section-title text-gradient">Build Your Drip</h2>
        <p className="hero-subtitle mb-4">Swipe to mix and match</p>
        
        <SliderSection title="1. Choose Base" category="base" optionsList={OPTIONS.bases} />
        <SliderSection title="2. Pick Fruit" category="fruit" optionsList={OPTIONS.fruits} />
        <SliderSection title="3. Sweetness" category="sugar" optionsList={OPTIONS.sugars} />
        <SliderSection title="4. Add Toppings" category="topping" optionsList={OPTIONS.toppings} />
      </div>

      <div className="builder-summary">
        <div>
          <div style={{fontSize: '0.8rem', opacity: 0.8}}>Total Amount</div>
          <div className="builder-price">₹{totalPrice > 0 ? totalPrice : '--'}</div>
        </div>
        <button 
          className="add-btn" 
          style={{
            padding: '0.5rem 0.8rem', 
            fontSize: '0.95rem',
            whiteSpace: 'nowrap',
            opacity: isComplete ? 1 : 0.5, 
            cursor: isComplete ? 'pointer' : 'not-allowed'
          }} 
          onClick={handleAddToCart}
          disabled={!isComplete}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
