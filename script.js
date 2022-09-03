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
        console.log(newsCard);
        const createNewsElement = document.createElement('div');
        createNewsElement.classList.add('card');
        createNewsElement.innerHTML = `
         <div class="row g-0">
                <div class="col-md-4">
                    <img src="${newsCard.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${newsCard.title}</h5>
                        <p class="card-text"> ${newsCard.details} </p>
// lower part
                        <div class="d-flex justify-content-around align-content-center">

                        <div class="d-flex align-items-center">
                            <img style="width: 50px; border-radius: 100px;"  src=" ${newsCard.author.img} " alt="">
                            <h5> ${newsCard.author.name} </h5>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-eye"></i>
                            <p>435k</p>
                        </div>

                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half"></i>
                        </div>

                        <div>
                            <button class="btn btn-light"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>

                    </div>

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

