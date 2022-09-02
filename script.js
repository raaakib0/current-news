const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category));
}

const displayCategories = categories => {
    // for (const categorie of categories) {

    //     console.log(categorie);
    // }
    const displayCategoriesId = document.getElementById('displayCategories');

    categories.forEach(categorie => {
        const createElement = document.createElement('div');
        createElement.innerHTML = `
         <a class="nav-link active" aria-current="page" href="#">${categorie.category_name}</a>
    `
        displayCategoriesId.appendChild(createElement);

    });
}

loadCategories();

// news
const loadCategoriesNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayNews(data.data));
}
const displayNews = news => {
    const displayNewsId = document.getElementById('displayNews');
    news.forEach(newsCard => {
        const createNewsElement = document.createElement('div');
        createNewsElement.classList.add('card mb-3');
        createNewsElement.innerHTML = `
         <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        `;
        displayNewsId.appendChild(createNewsElement);
    })

}

loadCategoriesNews();
// const displayMill = mills => {

//     const cardId = document.getElementById('card-add');

//     mills.forEach(mill => {
//         console.log(mill);

//     //     const divcreate = document.createElement('div');
//     //     divcreate.classList.add('col');
//     //     divcreate.innerHTML = `
//     //  <div class="card h-100">
//     //              <img src="..." class="card-img-top" alt="...">
//     //              <div class="card-body">
//     //                  <h5 class="card-title">Card title</h5>
//     //                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
//     //                      content. This content is a little bit longer.</p>
//     //              </div>
//     //          </div> `;
//     //     cardId.appendChild(divcreate);
//     })

// }

