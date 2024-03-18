const products = [
  {
    id: 1,
    name: '레시피1',
    time: '10분',
    image: '../img/sample01.png',
    description: '',
  },
  {
    id: 2,
    name: '레시피2',
    time: '10분',
    image: '../img/sample02.png',
    description: '',
  },
  {
    id: 3,
    name: '레시피3',
    time: '10분',
    image: '../img/sample03.png',
    description: '',
  },
  {
    id: 4,
    name: '레시피4',
    time: '10분',
    image: '../img/sample04.png',
    description: '',
  },
  {
    id: 5,
    name: '레시피5',
    time: '10분',
    image: '../img/sample05.png',
    description: '',
  },
  {
    id: 6,
    name: '레시피6',
    time: '10분',
    image: '../img/sample06.png',
    description: '',
  },
  {
    id: 7,
    name: '레시피7',
    time: '10분',
    image: '../img/sample07.png',
    description: '',
  },
  {
    id: 8,
    name: '레시피8',
    time: '10분',
    image: '../img/sample08.pngg',
    description: '',
  },
  {
    id: 9,
    name: '레시피9',
    time: '10분',
    image: '../img/sample09.png',
    description: '',
  },
];

const productList = document.querySelector('#product-list');
const btn = document.querySelector('#search-btn');

// 서버에서 받아온 데이터를 브라우저에 로드함
function displayProducts(products) {
  // 만약 검색을 한 경우에는 원래 있던 요소들을 삭제해야
  // 검색 결과 요소들만 볼 수 있음
  productList.innerHTML = ''; // 상품 목록 초기화

  products.forEach((product) => {
    const productElement = document.createElement('div');

    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <p>상품 이름: ${product.name}, 가격: ${product.price}원</p>
        `;
    productElement.addEventListener('click', () => {
      window.location.href = `detail.html?id=${product.id}`;
    });
    // 쿼리스트링을 사용해 detail.html 파일로 이동하는데,
    // id라는 key로 product.id 값을 함께 전달
    productList.append(productElement);
  });
}

// 검색 결과를 표시하는 함수
function searchProducts(keyword) {
  const filteredProducts = products.filter((product) => {
    return product.name.includes(keyword);
  });

  displayProducts(filteredProducts);
}

btn.addEventListener('click', () => {
  const keyword = document.querySelector('#search-input').value;
  console.log(keyword);
  searchProducts(keyword);
});

displayProducts(products);
