const articlesEl = document.getElementById('articles')
const articles = [];

$.getJSON("http://localhost/news/articles.php", data => {
  for (let i = 0; i < data.length; i++) {
    let article = `
         <div class="card my-3 mx-2" style="width: 20rem;">
         <p class="m-2"> Author: ${data[i]['author']}</p>
                  <img src="${data[i]['image']}" class="card-img-top" alt="...">
                  <div class="card-body mb-5">
                      <h5 class="card-title">${data[i]['title']}</h5>
                      <p class="card-text">${data[i]['content']}</p>
                      </div>
                      <a href="${data[i]['url']}" class="position-absolute bottom-0 btn btn-primary w-100">More about</a>
              </div>
        `;
        articles.push(article)
      }
    });