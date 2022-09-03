const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category));
}

const displayCategories = categories => {
   
    const displayCategoriesId = document.getElementById('displayCategories');

    categories.forEach(categorie => {
        const createElement = document.createElement('div');
        createElement.innerHTML = 
        ` <a class="nav-link active" onclick="loadCategoriesNews('${categorie.category_id}')" aria-current="page" href="#">${categorie.category_name}</a>`
        displayCategoriesId.appendChild(createElement);

    });
}

loadCategories();

// news
const loadCategoriesNews = (catId) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`)
        .then(res => res.json())
        .then(data => displayNews(data.data));
}
const displayNews = news => {
    const displayNewsId = document.getElementById('displayNews');
    displayNewsId.innerHTML = ``;
    news.forEach(newsCard => {
        const createNewsElement = document.createElement('div');
        createNewsElement.classList.add('card');
        // console.log(newsCard.rating);
        createNewsElement.innerHTML = `
         <div class="row g-0">
                <div class="col-md-4">
                    <img src="${newsCard.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${newsCard.title}</h5>
                        <p class="card-text"> ${newsCard.details.slice(0, 650) + '...'}  </p>

                        <div class="d-flex justify-content-around align-content-center">

                        <div class="d-flex align-items-center">
                            <img style="width: 50px; border-radius: 100px;"  src=" ${newsCard.author.img} " alt="">
                            <h5> ${newsCard.author.name} </h5>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-eye"></i>
                            <p> ${newsCard.total_view} </p>
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


