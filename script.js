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
            ` <a class="nav-link active text-light fs-5 ps-4" onclick="loadCategoriesNews('${categorie.category_id}')" aria-current="page" href="#">${categorie.category_name}</a>`

        displayCategoriesId.appendChild(createElement);

    });
}

loadCategories();

// news
const loadCategoriesNews = (catId) => {
    toggleSpinner(true);
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
        createNewsElement.classList.add('mb-4');
        createNewsElement.innerHTML = `

         <div onclick="newsModal( '${newsCard._id}' )" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="  row g-0">
                <div class="col-md-4">
                    <img src="${newsCard.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8 text-bg-primary p-3">
                    <div class="card-body">
                        <h5 class="card-title">${newsCard.title}</h5>
                        <p class="card-text"> ${newsCard.details.slice(0, 650) + '...'}  </p>

                        <div class="d-flex justify-content-around align-items-center align-content-center">

                        <div class="d-flex align-items-center align-content-center">
                            <img style="width: 50px; border-radius: 100px;"  src=" ${newsCard.author.img} " alt="">
                            <h5 class="ps-3"> ${newsCard.author.name} </h5>
                        </div>
                        <div class="d-flex align-items-center align-content-center ">
                            <i class="fa-solid fa-eye"></i>
                            <p class="ps-3 "> ${newsCard.total_view} </p>
                        </div>

                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
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
    toggleSpinner(false);
}

// news modal
const newsModal = (newsId) => {
    fetch(`https://openapi.programming-hero.com/api/news/${newsId} `)
        .then(res => res.json())
        .then(data => displayModal(data.data));

    // console.log(newsId);
}

const displayModal = newsModal => {
    const modalDisplayId = document.getElementById('modalAdd');
    modalDisplayId.innerHTML = ``;

    newsModal.forEach(news => {
        const createNewsElementModal = document.createElement('div');
        createNewsElementModal.classList.add('modal-content');

        createNewsElementModal.innerHTML = `
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${news.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                        <img src=" ${news.thumbnail_url} " alt="">
                        <p class="card-text"> ${news.details} </p>
                    </div>
        `;

        modalDisplayId.appendChild(createNewsElementModal);

    });


}

const toggleSpinner = isLoading => {
    const spinnerId = document.getElementById('spinner');
    if (isLoading) {
        spinnerId.classList.remove('d-none')
    } else {
        spinnerId.classList.add('d-none')

    }
}
// loadCategoriesNews();


