results.forEach(item => {
     const card = document.createElement('div');
     card.className = 'result-card';
    card.innerHTML = `<h3>${item.title}</h3>
                      <p>${item.description}</p>`;
     
     container.appendChild(card);
   });