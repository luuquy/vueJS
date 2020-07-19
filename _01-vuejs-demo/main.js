var vueInstance = new Vue({
  el: "#app",
  data: {
    title: "Áo thun nam thể thao đây nè",
    url:
      "https://lazada.vn/products/ao-thun-phan-quang-yeu-ai-de-khong-phai-quay-xe-ao-thun-cotton-75-ao-from-rong-ao-thun-unisex-ao-thun-dep-ao-phong-nam-ken-t-shirt-atpq02-thoi-trang-hl-ao-thun-phan-quang-yeu-ai-de-khong-phai-quay-xe-000176-i621696148-s1446160057.html?spm=a2o4n.searchlist.list.6.21185d56Y47YUN&search=1",
    target: "_blank",
    price: 20000,
    sale: 0.3,
    selectedProduct: 1,
    cardNumber: 0,
    listProductDetail: [
      {
        image: "./images/blue.jpg",
        quantity: 8,
        textColor: "Màu xanh",
      },
      {
        image: "./images/black.jpg",
        quantity: 6,
        textColor: "Màu đen",
      },
      {
        image: "./images/red.jpg",
        quantity: 0,
        textColor: "Màu đỏ",
      },
    ],
    listDesc: [
      "Sản Phẩm: Bộ Đồ Nam Thời Tang",
      "Chất liệu: Vải thun cotton thoáng mát, đường may cẩn thận tỉ mỉ",
      "Thiết kế : áo cổ tròn tay ngắn mát mẻ dễ phối đồ",
      "Kiểu dáng gọn nhẹ, khỏe khoắn, thời trang, năng động, cá tính, sành điệu",
      "Phù hợp nhiều hoàn cảnh: mặc nhà, đi học, đi chơi, du lịch…",
      "Xuất xứ: Việt Nam",
    ],
    description:
      "Lorem ipsum <b> dolor</b> sit amet consectetur, adipisicing elit. Quis natus dolores voluptatibus libero temporibus mollitia maxime incidunt veritatis. Magni aperiam tempore corporis fugit ex optio nulla cum rerum iste unde?",
  },
  methods: {
    handleClickColor(e, index) {
      console.log(e, index);
      this.selectedProduct = index;
    },
    classActive(index) {
      return { active: this.selectedProduct === index };
    },
    handleAddToCart() {
      if (this.cardNumber + 1 > this.getProduct.quantity) {
        alert("Số lượng không đủ nha");
      } else {
        this.cardNumber++;
      }
    },
  },
  computed: {
    formatOriginalPrice() {
      var number = this.price;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "vnd",
      }).format(number);
    },

    formatFinalPrice() {
      let finalPrice = this.price - this.sale * this.price;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "vnd",
      }).format(finalPrice);
    },

    getProduct() {
      let index = this.selectedProduct;
      return this.listProductDetail[index];
    },
  },
});
