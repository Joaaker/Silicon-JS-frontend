// Code for FAQ-Items written with assistance from ChatGPT
import React, { useEffect, useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    
    fetchFaqs();
  }, []);


  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(expandedId => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="FAQ-items-container">{faqs.map((faq) => (
        <div className={`FAQ-item ${expandedIds.includes(faq.id) ? 'expanded' : ''}`} key={faq.id}>
          <div className="dropdown-btn-container">
            <button className="dropdown-btn" aria-expanded={expandedIds.includes(faq.id)}  
            aria-controls={`answer-${faq.id}`} onClick={() => toggleExpand(faq.id)}>
              <span>{faq.title}</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="FAQ-answer" id={`answer-${faq.id}`}>
            <p>{faq.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;