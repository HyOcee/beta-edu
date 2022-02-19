let list;
const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyDrBwdpzBEKRbxjuPrjGNvRNfkam4ooy5Y'
fetch(url)
    .then(response => response.json())
    .then(data => {
        let list = data["items"];
        console.log(list);

        let holder = document.getElementById('holder')
        for (let index = 0; index < 8; index++) {
            const element = list[index];
            let holder = document.getElementById('holder')
            // let img = document.getElementById('img')
            let cards = document.createElement('div')
            // console.log(element["kind"])
            let imgCard = document.createElement('div')
            let img = document.createElement('img')
            let h3 = document.createElement('h3')
            let bookSubtitleHolder = document.createElement('div')
            let bookSubtitleTitle = document.createElement('div')
            let bookSubtitle = document.createElement('div')
            let bookAuthorHolder = document.createElement('div')
            let bookAuthorTitle = document.createElement('div')
            let bookAuthor = document.createElement('div')
            let bookPublishDateHolder = document.createElement('div')
            let bookPublishDateTitle = document.createElement('div')
            let bookPublishDate = document.createElement('div')
            // let cardContent = document.createElement('div');
            // cardContent.innerHTML = `<div class="img-card"><img src="images/regular.svg" alt="Regular Car"></div>
            //     <h3>${element["kind"]}</h3>`

            //     <div class="car-details" id="book-subtitle-holder">
            //         <div id="book-subtitle-title">Subtitle:</div>
            //         <div class="bl" id="book-subtitle">Four Seater</div>
            //     </div>

            //     <div class="car-details" id="book-author-holder">
            //         <div id="book-author-title">Author(s):</div>
            //         <div class="bl" id="book-author">White &amp; Black</div>
            //     </div>

            //     <div class="car-details" id="book-publish-date-holder">
            //         <div id="book-publish-date-title">Publish Date:</div>
            //         <div class="bl" id="book-publish-date">&dollar;5,000</div>
            //     </div>

            //     <button class="bl-btn">Order Ride</button>
            // `;
            // title.innerHTML = `${element.name}`
            // langauge.innerHTML = `${element.language}`
            // let img = document.createElement('img')
            // img.src = `${element.image.medium}`
            cards.setAttribute('class', 'col-4 card')
            imgCard.setAttribute('class', 'img-card')

            bookSubtitleHolder.setAttribute('class', 'car-details')
            bookSubtitleHolder.setAttribute('id', 'book-subtitle-holder')
            bookSubtitleTitle.setAttribute('id', 'book-subtitle-title')
            bookSubtitle.setAttribute('class', 'bl')
            bookSubtitle.setAttribute('id', 'book-subtitle')
            bookAuthorHolder.setAttribute('class', 'car-details')
            bookAuthorHolder.setAttribute('id', 'book-author-title')
            bookAuthorTitle.setAttribute('id', 'book-author-title')
            bookAuthor.setAttribute('class', 'bl')
            bookAuthor.setAttribute('id', 'book-author')
            bookPublishDateHolder.setAttribute('class', 'car-details')
            bookPublishDateHolder.setAttribute('id', 'book-publish-date-title')
            bookPublishDateTitle.setAttribute('id', 'book-publish-date-title')
            bookPublishDate.setAttribute('class', 'bl')
            bookPublishDate.setAttribute('id', 'book-publish-date')

            img.setAttribute('id', 'img')
            img.setAttribute('src', element.volumeInfo.imageLinks.smallThumbnail)
            h3.innerHTML = element.volumeInfo.title;
            bookSubtitleTitle.innerHTML = "Subtitle";
            bookSubtitle.innerHTML = element.volumeInfo.subtitle;
            bookAuthorTitle.innerHTML = "Authors";
            bookAuthor.innerHTML = element.volumeInfo.authors;
            bookPublishDateTitle.innerHTML = "Published Date";
            bookPublishDate.innerHTML = element.volumeInfo.publishedDate;
            console.log(element.volumeInfo.subtitle)
            
            bookSubtitleHolder.append(bookSubtitleTitle)
            bookSubtitleHolder.append(bookSubtitle)
            bookAuthorHolder.append(bookAuthorTitle)
            bookAuthorHolder.append(bookAuthor)
            bookPublishDateHolder.append(bookPublishDateTitle)
            bookPublishDateHolder.append(bookPublishDate)


            console.log(element.volumeInfo.imageLinks.smallThumbnail)
            // console.log(v)
            imgCard.append(img);
            cards.append(imgCard)
            cards.append(h3)
            cards.append(bookSubtitleHolder)
            cards.append(bookAuthorHolder);
            cards.append(bookPublishDateHolder);
            holder.append(cards);
        }
        
    });