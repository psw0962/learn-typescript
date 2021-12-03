interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function fetchProducts(): Promise<Product[]> {
 //..
}

type noneStockShoppingItem = Omit<Product, 'stock'>; // 일부제외
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>; // 일부포함
type updateShoppingItem = Partial<Product>; // 정의한 모든 타입을 옵셔널(?)로 변경

function displayProductDetail(shoppingItem: shoppingItem) {
  //..
}

// ---------------------------------------------------------------------------------------- //

let products: Product[] = [
  { id: 1, name: '참치김밥', price: 3000, brand: '김가네', stock: 3 },
];

function displayProduct(productInfo: { id: 1; name: '참치김밥'; price: 3000 }) {
  // ...
}
// 위 함수를
// 아래처럼 사용할 수 있다.
function displayProduct(productInfo: Pick<Product, 'id' | 'name' | 'price'>) {
  // ...
}

// #1 - Partial
type Subset<T> = {
  [K in keyof T]?: T[K];
};

const productDetail: Product = {
  id: 1,
};

// #2 - Pick
type PickFewThings<T, K extends keyof T> = {
  [P in K]: T[P];
}

const productName: PickFewThings<Product, 'name'> = {

}
const productNameWithPrice: PickFewThings<Product, 'name' | 'price'> = {
  
}