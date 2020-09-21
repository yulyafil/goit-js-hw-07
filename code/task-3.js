const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesRef = document.querySelector('#gallery');

const makeGalleryImgRef = array => {
  return array.map(element => {
    const elementRef = document.createElement('li');
    elementRef.classList.add('item');

    const imgRef = document.createElement('img');
    imgRef.src = `${element.url}`;
    imgRef.alt = `${element.alt}`;
    imgRef.width = 400;
    elementRef.appendChild(imgRef);

    return elementRef;
  });
};

const elements = makeGalleryImgRef(images);
imagesRef.append(...elements);
//imagesRef.insertAdjacentHTML('afterbegin', elements);
