import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /* products: Product[] = [
    {
      _id: '5ff8ba0e73f4d752445318cc',
      productId: 1,
      productName: 'Samsung s6',
      productInfo: {
        color: ['red', 'black', 'silver'],
        material: 'platinum',
        weight: '450 g',
        description:
          'The Samsung Galaxy S6 is a smartphone that was tested with the Android 6.0. 1 operating system. This model weighs 4.9 ounces, has a 5.1-inch touch screen display, 16-megapixel main camera, and 5-megapixel selfie camera. It comes with 3GB of RAM.',
      },
      productPrice: {
        currentPrice: 2000,
        discount: 0,
        finalPrice: 2000,
        currency: 'EGP',
      },
      productRate: 2.5,
      productImages: [
        'https://images-na.ssl-images-amazon.com/images/I/618cyFfBFkL._AC_SX466_.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's6'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 20,
      productSales: '38pozurx_j0noov1f5',
    },
    {
      _id: '5ff8ba0e73f4d752445318cd',
      productId: 2,
      productName: 'Samsung s6+',
      productInfo: {
        color: ['black', 'silver'],
        material: 'glass',
        weight: '480 g',
        description:
          'Samsung Galaxy S6 edge+ features a 5.7-inch Quad HD (2560 x 1440p) Super AMOLED display with a dual edge screen with extended curved displays on the edges. Galaxy S6 edge+ is powered by a Samsung Exynos octa core (2.1GHz Quad + 1.5GHz Quad), 64bit chip and 4GB RAM (LPDDR4).',
      },
      productPrice: {
        currentPrice: 2500,
        discount: 0,
        finalPrice: 2500,
        currency: 'EGP',
      },
      productRate: 2.5,
      productImages: [
        'https://static.toiimg.com/photo/54059277/Samsung-Galaxy-S6-Plus.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's6+', 's6 plus'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 436,
      productSales: 'kqesyl6a_pnv0kbbjl',
    },
    {
      _id: '5ff8ba0e73f4d752445318ce',
      productId: 3,
      productName: 'Samsung s6 edge',
      productInfo: {
        color: ['red', 'black', 'silver', 'gold'],
        material: 'glass',
        weight: '440 g',
        description:
          'The S6 and S6 Edge features a 5.1-inch 1440p Super AMOLED display; similarly to the Galaxy Note Edge while the S6 Edge+ features a 5.7-inch 1440p Super AMOLED display, the S6 Edge and S6 Edge+\'s display is slightly curved around the two lengthwise edges of the device, although not as aggressively as the Note Edge.',
      },
      productPrice: {
        currentPrice: 2200,
        discount: 0,
        finalPrice: 2200,
        currency: 'EGP',
      },
      productRate: 2.6,
      productImages: [
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s6-edge-plus.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's6', 'edge'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 114,
      productSales: 'uoqtjrkf_w37gscwgm',
    },
    {
      _id: '5ff8ba0e73f4d752445318cf',
      productId: 4,
      productName: 'Samsung s7',
      productInfo: {
        color: ['gold', 'black', 'silver'],
        material: 'platinum',
        weight: '450 g',
        description:
          'Galaxy S7 devices are equipped with an octa-core Exynos 8890 system on a chip and 4GB of RAM in China. ... The S7 includes either 32, 64 or 128 GB of internal storage (in most markets only the 32 GB model will be available). Storage can be expanded using a microSD card. S7 devices are packaged with a USB OTG adapter.',
      },
      productPrice: {
        currentPrice: 3000,
        discount: 0,
        finalPrice: 3000,
        currency: 'EGP',
      },
      productRate: 2.5,
      productImages: [
        'https://upload.wikimedia.org/wikipedia/commons/0/03/Samsung_Galaxy_S7_and_S7_Edge.png',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's7'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 232,
      productSales: '7ztgxkbe_h6xxberh9',
    },
    {
      _id: '5ff8ba0e73f4d752445318d0',
      productId: 5,
      productName: 'Samsung s7 edge',
      productInfo: {
        color: ['blue', 'black', 'silver'],
        material: 'glass',
        weight: '440 g',
        description:
          'The S7, S7 Edge & S7 Active feature a 1440p Quad HD Super AMOLED display; the S7 & S7 Active both have a 5.1-inch panel, while the S7 Edge uses a larger 5.5-inch panel. As with the prior model, the S7 Edge\'s screen is curved along the side bezels of the device.',
      },
      productPrice: {
        currentPrice: 3200,
        discount: 0,
        finalPrice: 3200,
        currency: 'EGP',
      },
      productRate: 3.5,
      productImages: [
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s7-edge-usa.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's7', 'edge'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 15,
      productSales: 'xdpd0n7_a5dz7c7yz',
    },
    {
      _id: '5ff8ba0e73f4d752445318d1',
      productId: 6,
      productName: 'Samsung s7+',
      productInfo: {
        color: ['red', 'black', 'silver', 'gold', 'blue'],
        material: 'glass',
        weight: '440 g',
        description:
          'Samsung Galaxy Tab S7+ is powered by a 1.8GHz octa-core processor. It comes with 6GB of RAM. ... The Samsung Galaxy Tab S7+ measures 285.00 x 185.00 x 5.70mm (height x width x thickness) and weighs 575.00 grams. It was launched in Mystic Black, Mystic Bronze, and Mystic Silver colours.',
      },
      productPrice: {
        currentPrice: 3500,
        discount: 0,
        finalPrice: 3500,
        currency: 'EGP',
      },
      productRate: 2,
      productImages: [
        'https://i.gadgets360cdn.com/products/large/samsung-galaxy-s7-plus-1200x800-1596634302.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's7+'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 1,
      productSales: 'qpjwxww_ca5880j3s',
    },
    {
      _id: '5ff8ba0e73f4d752445318d2',
      productId: 7,
      productName: 'Samsung s8',
      productInfo: {
        color: ['gold', 'black', 'silver'],
        material: 'glass',
        weight: '450 g',
        description:
          'The S8 features an octa-core Exynos 8895 system-on-chip and 4 GB of RAM; models in North American and East Asian markets utilize the Qualcomm Snapdragon 835 instead. Both chips are manufactured by Samsung with a 10 nm process. They contain 64 GB of internal storage, expandable via microSD card.',
      },
      productPrice: {
        currentPrice: 4000,
        discount: 0,
        finalPrice: 4000,
        currency: 'EGP',
      },
      productRate: 3.5,
      productImages: [
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's8'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 222,
      productSales: 'w9qbt2be_iphvvk7x9',
    },
    {
      _id: '5ff8ba0e73f4d752445318d3',
      productId: 8,
      productName: 'Samsung s8 edge',
      productInfo: {
        color: ['blue', 'black', 'silver', 'gold'],
        material: 'glass',
        weight: '440 g',
        description:
          'Samsung Galaxy S8 Edge smartphone has a Super AMOLED display. The screen has a resolution of 2160 x 3840 pixels and 773 ppi pixel density. On camera front, the buyers get a 8 MP Front Camera and on the rear, there\'s an 16 MP camera with features like Digital Zoom, Auto Flash, Face detection, Touch to focus.',
      },
      productPrice: {
        currentPrice: 4200,
        discount: 0,
        finalPrice: 4200,
        currency: 'EGP',
      },
      productRate: 3.5,
      productImages: [
        'https://i.pinimg.com/originals/c2/8a/e0/c28ae0ec577f7c226ccd8c9b51e11d32.png',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's8', 'edge'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 25,
      productSales: 'tc8k8qpt_wi86cd8oz',
    },
    {
      _id: '5ff8ba0e73f4d752445318d4',
      productId: 9,
      productName: 'Samsung s8+',
      productInfo: {
        color: ['red', 'black', 'gold', 'blue'],
        material: 'glass',
        weight: '440 g',
        description:
          'It has 4 GB RAM and 64 GB internal storage. Samsung Galaxy S8 Plus smartphone has a Super AMOLED display. It measures 159.5 mm x 73.4 mm x 8.1 mm and weighs 173 grams. The screen has a resolution of 1440 x 2960 pixels and 531 ppi pixel density. It has an aspect ratio of 18.5:9 and screen-to-body ratio of 83.7 %.',
      },
      productPrice: {
        currentPrice: 4500,
        discount: 0,
        finalPrice: 4500,
        currency: 'EGP',
      },
      productRate: 2,
      productImages: [
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-plus-.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 's8+'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 101,
      productSales: 'mbrj93jl_2t7cdrprs',
    },
    {
      _id: '5ff8ba0e73f4d752445318d5',
      productId: 10,
      productName: 'Samsung fold',
      productInfo: {
        color: ['silver', 'black'],
        material: 'metal',
        weight: '270 g',
        description:
          'Samsung Galaxy Fold is powered by a 2.84GHz octa-core Qualcomm Snapdragon 855 processor. It comes with 12GB of RAM. The Samsung Galaxy Fold runs Android Pie and is powered by a 4380mAh non-removable battery. The Samsung Galaxy Fold supports wireless charging, as well as Quick Charge 2.0 fast charging.',
      },
      productPrice: {
        currentPrice: 22500,
        discount: 0,
        finalPrice: 22500,
        currency: 'EGP',
      },
      productRate: 4.5,
      productImages: [
        'https://www.samsung.com/global/galaxy/galaxy-fold/specs/images/galaxy-fold_specs_design_cosmos_black.jpg',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'fold'],
      warehouseId: '5ff7b7c11c1a3e395fc30538',
      productStock: 11002,
      productSales: '0cmio9b_2kpjyrqvg',
    },
    {
      _id: '5ff8ba0e73f4d752445318d6',
      productId: 11,
      productName: 'Samsung Galaxy A02s',
      productInfo: {
        color: ['blue', 'black'],
        material: 'platinum',
        weight: '300 g',
        description:
          '6.5 HD+ Display for Immersive Viewing Experience,Multi Role Triple Rear Camera,5,000mAh Long Lasting Battery with 15W Fast Charging',
      },
      productPrice: {
        currentPrice: 5300,
        discount: 0,
        finalPrice: 5300,
        currency: 'EGP',
      },
      productRate: 3,
      productImages: [
        'https://images.samsung.com/is/image/samsung/p6pim/my/sm-a025fzbfxme/gallery/my-galaxy-a02s-a025-sm-a025fzbfxme-thumb-359828349?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a02s'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 200,
      productSales: 'yva670rd_xp4zptce0',
    },
    {
      _id: '5ff8ba0e73f4d752445318d7',
      productId: 12,
      productName: 'Samsung Galaxy A12',
      productInfo: {
        color: ['black', 'blue'],
        material: 'metal',
        weight: '280 g',
        description:
          '6.5 HD+ Display for Immersive Viewing Experience,Multi Role Quad Camera to capture all your precious moments,5,000mAh Long Lasting Battery with 15W Fast Charging',
      },
      productPrice: {
        currentPrice: 8000,
        discount: 0,
        finalPrice: 8000,
        currency: 'EGP',
      },
      productRate: 3.5,
      productImages: [
        'https://images.samsung.com/is/image/samsung/p6pim/my/sm-a125fzbjxme/gallery/my-galaxy-a12-a125-sm-a125fzbjxme-thumb-359848209?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a12'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 400,
      productSales: '3zevjxnq_ef9bz77u1',
    },
    {
      _id: '5ff8ba0e73f4d752445318d8',
      productId: 13,
      productName: 'Samsung Galaxy A42 5G',
      productInfo: {
        color: ['gray', 'black'],
        material: 'metal',
        weight: '290 g',
        description:
          '6.5 HD+ Display for Immersive Viewing Experience,Multi Role Quad Camera to capture all your precious moments,5,000mAh Long Lasting Battery for all day usage',
      },
      productPrice: {
        currentPrice: 8500,
        discount: 0,
        finalPrice: 8500,
        currency: 'EGP',
      },
      productRate: 3.6,
      productImages: [
        'https://images.samsung.com/is/image/samsung/p6pim/my/sm-a426bzahxme/gallery/my-galaxy-a42-5g-a426-sm-a426bzahxme-thumb-335264818?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a42', '5g'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 5422,
      productSales: 'ps2vkjdm_1e11gaoeh',
    },
    {
      _id: '5ff8ba0e73f4d752445318d9',
      productId: 14,
      productName: 'Samsung Galaxy A11',
      productInfo: {
        color: ['black', 'silver'],
        material: 'platinum',
        weight: '350 g',
        description:
          'Multi Role Triple Rear Camera,4,000mAh Long Lasting and Fast Charging Battery,6.4 HD+ Infinity-O Display',
      },
      productPrice: {
        currentPrice: 5300,
        discount: 0,
        finalPrice: 5300,
        currency: 'EGP',
      },
      productRate: 4,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a11-a115-sm-a115fzwgxme-front-thumb-252651789?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a11'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 222,
      productSales: 'l25xq1k8_lu23vsed6',
    },
    {
      _id: '5ff8ba0e73f4d752445318da',
      productId: 15,
      productName: 'Samsung Galaxy A31',
      productInfo: {
        color: ['blue', 'black', 'silver'],
        material: 'glass',
        weight: '340 g',
        description:
          'Multi Role Quad Rear Camera,Uninterrupted Viewing Experience with Super AMOLED Display,Long Lasting and Fast Charging Battery,Awesome screen built for cinema',
      },
      productPrice: {
        currentPrice: 10000,
        discount: 0,
        finalPrice: 10000,
        currency: 'EGP',
      },
      productRate: 4.3,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a31-a315-sm-a315gzbwxme-front-thumb-246019755?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a31'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 1215,
      productSales: '9wk4ceeu_w2onuga1x',
    },
    {
      _id: '5ff8ba0e73f4d752445318db',
      productId: 16,
      productName: 'Samsung Galaxy A21s',
      productInfo: {
        color: ['blue', 'black', 'white'],
        material: 'glass',
        weight: '310 g',
        description:
          'Multi Role Quad Rear Camera,5,000mAh Long Lasting and Fast Charging Battery,6.5 HD+ Infinity-O Display,Awesome screen built for cinema',
      },
      productPrice: {
        currentPrice: 8900,
        discount: 0,
        finalPrice: 8900,
        currency: 'EGP',
      },
      productRate: 4.5,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a21s-a217-sm-a217fzwfxme-front-thumb-252675753?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a21s'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 1000,
      productSales: 'ahthtrp_ufh6iw3oh',
    },
    {
      _id: '5ff8ba0e73f4d752445318dc',
      productId: 17,
      productName: 'Samsung Galaxy A71',
      productInfo: {
        color: ['purple', 'black', 'silver'],
        material: 'glass',
        weight: '350 g',
        description:
          'With A71’s powerful 4,500mAh* battery, you can keep on streaming and snapping.See everything so much better on the incredible top tier 6.7”* FHD+ Super AMOLED screen. The bezel less design makes the large screen feel compact in your hands.512GB of expandable storage means you can stop worrying about running out of memory.',
      },
      productPrice: {
        currentPrice: 11000,
        discount: 0,
        finalPrice: 11000,
        currency: 'EGP',
      },
      productRate: 4.1,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a71-a715-sm-a715fmsexme-frontsilver-thumb-273583985?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a71'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 24122,
      productSales: 'pwmw300b_c603i9oem',
    },
    {
      _id: '5ff8ba0e73f4d752445318dd',
      productId: 18,
      productName: 'Samsung Galaxy A51',
      productInfo: {
        color: ['gray', 'black', 'silver', 'blue'],
        material: 'glass',
        weight: '240 g',
        description:
          'Multi Role Quad Camera,Super Steady Video,Samsung Pay,Infinity-O display',
      },
      productPrice: {
        currentPrice: 10200,
        discount: 0,
        finalPrice: 10200,
        currency: 'EGP',
      },
      productRate: 4.4,
      productImages: [
        'https://images.samsung.com/is/image/samsung/p6pim/my/sm-a515fmspxme/gallery/my-galaxy-a51-a515-314350-sm-a515fmspxme-thumb-332493053?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a51'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 2512,
      productSales: 'p0fs5uzs_1lfbovu6u',
    },
    {
      _id: '5ff8ba0e73f4d752445318de',
      productId: 19,
      productName: 'Samsung Galaxy A20s',
      productInfo: {
        color: ['red', 'black', 'green'],
        material: 'glass',
        weight: '410 g',
        description:
          '6.5 HD+ Infinity-V display that gives more room to play.Triple rear camera, with ultra-wide that lets you capture the world without any restrictions.4,000mAh battery with 15W Fast Charging technology lets you enjoy your phone longer.Infinity V-display',
      },
      productPrice: {
        currentPrice: 9500,
        discount: 0,
        finalPrice: 9500,
        currency: 'EGP',
      },
      productRate: 4.8,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a20s-a207-sm-a207fzgdxme-front-thumb-190332463?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a20s'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 1031,
      productSales: 'gstctbdj_y12alle5o',
    },
    {
      _id: '5ff8ba0e73f4d752445318df',
      productId: 20,
      productName: 'Samsung Galaxy A50s',
      productInfo: {
        color: ['white', 'black', 'blue'],
        material: 'metal',
        weight: '370 g',
        description:
          'Super Steady - records live videos like pro-level action camera with smooth and stabl.On-Screen Fingerprint scanner -personalized and secured access to you device.Infinity Display,Rear camera.',
      },
      productPrice: {
        currentPrice: 12500,
        discount: 0,
        finalPrice: 12500,
        currency: 'EGP',
      },
      productRate: 4.5,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a50s-a507-sm-a507fzgwxme-front-thumb-190346588?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a50s'],
      warehouseId: '5ff7b8151c1a3e395fc30539',
      productStock: 102,
      productSales: 'o8aujfx_14p5vfu6s',
    },
    {
      _id: '5ff8ba0e73f4d752445318e0',
      productId: 21,
      productName: 'Samsung Galaxy A30s',
      productInfo: {
        color: ['blue', 'black', 'white'],
        material: 'platinum',
        weight: '300 g',
        description:
          'View Better with Infinity-V Super AMOLED Display,Capture More with Advanced Triple Camera,Do More with 128GB Internal Storage,Infinity Display',
      },
      productPrice: {
        currentPrice: 9300,
        discount: 0,
        finalPrice: 9300,
        currency: 'EGP',
      },
      productRate: 4.8,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a30s-a307-sm-a307gzgwxme-front-thumb-210994417?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a30s'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 5400,
      productSales: '745xrusm_gekg6wt0n',
    },
    {
      _id: '5ff8ba0e73f4d752445318e1',
      productId: 22,
      productName: 'Samsung Galaxy A10s',
      productInfo: {
        color: ['green', 'blue', 'red'],
        material: 'metal',
        weight: '265 g',
        description:
          'Dual rear camera, with depth sensor lets you apply cool bokeh effects to your photos,Face & Fingerprint recognition, unlock your phone instantly & safely,4,000mAh battery lets you enjoy your device more,Infinity display.',
      },
      productPrice: {
        currentPrice: 5000,
        discount: 10,
        finalPrice: 4500,
        currency: 'EGP',
      },
      productRate: 4.3,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a10s-a107-sm-a107fzgdxme-front-thumb-190332296?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a10s'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 1400,
      productSales: 'nr0os7ac_4dk7kus30',
    },
    {
      _id: '5ff8ba0e73f4d752445318e2',
      productId: 23,
      productName: 'Samsung Galaxy A80',
      productInfo: {
        color: ['gray', 'black'],
        material: 'metal',
        weight: '195 g',
        description:
          '6.7 FHD+ sAMOLED Infinity display: No notches, no distractions, ultimate viewing experience,Sliding and Rotating Triple Camera: The camera built for live, epic on both side,Rotating Triple Camera,Infinity Display.',
      },
      productPrice: {
        currentPrice: 6500,
        discount: 0,
        finalPrice: 6500,
        currency: 'EGP',
      },
      productRate: 5,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a80-a805-sm-a805fzkdxme-frontblack-thumb-190347058?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a80'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 122,
      productSales: 'k49fu8fn_e1de5cq6p',
    },
    {
      _id: '5ff8ba0e73f4d752445318e3',
      productId: 24,
      productName: 'Samsung Galaxy A70',
      productInfo: {
        color: ['black', 'white', 'blue'],
        material: 'platinum',
        weight: '232 g',
        description:
          '6.7 FHD+ sAMOLED Infinity-U display: immersive 20:9 aspect ratio viewing experience,Ultra wide triple rear camera: 123-degree field of vision like human eye, A.I. Scene Optimizer Enhancement for every shot,Infinity U Display,On-Screen Fingerprint.',
      },
      productPrice: {
        currentPrice: 7300,
        discount: 0,
        finalPrice: 7300,
        currency: 'EGP',
      },
      productRate: 4.3,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a70-a705-sm-a705fzbgxme-frontblue-thumb-190346867?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a70'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 2,
      productSales: '3mkyqtu8_qp5p4xu0z',
    },
    {
      _id: '5ff8ba0e73f4d752445318e4',
      productId: 25,
      productName: 'Samsung Galaxy A50',
      productInfo: {
        color: ['blue', 'black', 'white'],
        material: 'glass',
        weight: '341 g',
        description:
          '6.4 FHD+ sAMOLED edge-to-edge Infinity-U Display,Ultra wide triple rear camera: main(25MP)+ultra wide(5MP)+depth(8MP),Get great selfies bright and clear, day and night with 25MP front camera,Triple camera.',
      },
      productPrice: {
        currentPrice: 9000,
        discount: 10,
        finalPrice: 8100,
        currency: 'EGP',
      },
      productRate: 3.9,
      productImages: [
        'https://images.samsung.com/is/image/samsung/my-galaxy-a50-a505-sm-a505fzwhxme-frontwhite-thumb-153207756?$160_160_PNG$',
      ],
      productType: 'Samsung',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'Samsung', 'galaxy', 'a50'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 15,
      productSales: 'peioyf5x_ky9tevcvs',
    },
    {
      _id: '5ff8ba0e73f4d752445318e5',
      productId: 26,
      productName: 'iPhone 12 Pro Max',
      productInfo: {
        color: ['silver', 'graphite', 'gold', 'pacific blue'],
        material: 'textured matte glass',
        weight: '310 g',
        description:
          ' iPhone 12 Pro Max has a 6.7-inch1 all-screen Super Retina XDR display. The back is textured matte glass, and there\'s a flat-edge stainless steel band around the frame. The side button is on the right side of the device. There are three 12 MP cameras on the back: Ultra Wide, Wide, and Telephoto. There\'s a LiDAR Scanner on the back. There\'s a Dual-LED True Tone flash on the back and a SIM tray on the left side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 30000,
        discount: 0,
        finalPrice: 30000,
        currency: 'EGP',
      },
      productRate: 4.9,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12promax/iphone12-pro-max-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'pro', 'max', '12'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 1100,
      productSales: '2m7n6fqm_agn8rizb2',
    },
    {
      _id: '5ff8ba0e73f4d752445318e6',
      productId: 27,
      productName: 'iPhone 12 Pro',
      productInfo: {
        color: ['graphite', 'gold', 'silver', 'pacific blue'],
        material: 'textured matte glass',
        weight: '250 g',
        description:
          ' iPhone 12 Pro has a 6.1-inch1 all-screen Super Retina XDR display. The back is textured matte glass, and there\'s a flat-edge stainless steel band around the frame. The side button is on the right side of the device. There are three 12 MP cameras on the back: Ultra Wide, Wide, and Telephoto. There\'s a LiDAR Scanner on the back. There\'s a Dual-LED True Tone flash on the back and a SIM tray on the left side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 25000,
        discount: 0,
        finalPrice: 25000,
        currency: 'EGP',
      },
      productRate: 4.8,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'pro', '12'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 24122,
      productSales: '4ahvfnmb_6qv6pc4b4',
    },
    {
      _id: '5ff8ba0e73f4d752445318e7',
      productId: 28,
      productName: 'iPhone 12',
      productInfo: {
        color: ['white', 'black', 'red', 'blue', 'green'],
        material: 'glass',
        weight: '220 g',
        description:
          'iPhone 12 has a 6.1-inch1 Liquid Retina display. The back is glass, and there\'s a flat-edged anodized aluminum band around the frame. The side button is on the right side of the device. There are two 12 MP cameras on the back: Ultra Wide and Wide. There\'s a Dual-LED True Tone flash on the back and a SIM tray on the left side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 22300,
        discount: 0,
        finalPrice: 22300,
        currency: 'EGP',
      },
      productRate: 4.6,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12/iphone12-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', '12'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 212,
      productSales: 'mauv68qh_xjmkpd8sy',
    },
    {
      _id: '5ff8ba0e73f4d752445318e8',
      productId: 29,
      productName: 'iPhone 12 mini',
      productInfo: {
        color: ['red', 'black', 'green', 'white', 'blue'],
        material: 'glass',
        weight: '190 g',
        description:
          ' iPhone 12 mini has a 5.4-inch1 Liquid Retina display. The back is glass, and there\'s a flat-edged anodized aluminum band around the frame. The side button is on the right side of the device. There are two 12 MP cameras on the back: Ultra Wide and Wide. There\'s a Dual-LED True Tone flash on the back and a SIM tray on the left side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 16000,
        discount: 0,
        finalPrice: 16000,
        currency: 'EGP',
      },
      productRate: 4.1,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12mini/iphone12-mini-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'mini', '12'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 31,
      productSales: 'yla49wwr_fxt6jv3xj',
    },
    {
      _id: '5ff8ba0e73f4d752445318e9',
      productId: 30,
      productName: 'iPhone SE (2nd generation)',
      productInfo: {
        color: ['white', 'black', 'red'],
        material: 'glass',
        weight: '170 g',
        description:
          'The display is 4.7 inches (diagonal). The glass front is flat with curved edges. The back is glass, and there\'s an anodized aluminum band around the frame. The side button is on the right side of the device. The device has a solid-state Home button with Touch ID. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 10500,
        discount: 0,
        finalPrice: 10500,
        currency: 'EGP',
      },
      productRate: 4,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone_se/iphone-se-2nd-gen-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'se'],
      warehouseId: '5ff7b9651c1a3e395fc3053b',
      productStock: 12,
      productSales: 'vjbv0hsb_6qpk89hjy',
    },
    {
      _id: '5ff8ba0e73f4d752445318ea',
      productId: 31,
      productName: 'iPhone 11 Pro',
      productInfo: {
        color: ['space gray', 'midnight green', 'gold', 'silver'],
        material: 'textured matte glass',
        weight: '150 g',
        description:
          ' iPhone 11 Pro has a 5.8-inch1 all-screen Super Retina XDR display. The back is textured matte glass, and there\'s a stainless steel band around the frame. The side button is on the right side of the device. There are three 12 MP cameras on the back: Ultra Wide, Wide, and Telephoto. There\'s a Dual-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 18000,
        discount: 0,
        finalPrice: 18000,
        currency: 'EGP',
      },
      productRate: 4.6,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/identify-iphone-11pro.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'pro', '11'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 300,
      productSales: 'nujr857_eya8jyn4u',
    },
    {
      _id: '5ff8ba0e73f4d752445318eb',
      productId: 32,
      productName: 'iPhone 11 Pro Max',
      productInfo: {
        color: ['space gray', 'midnight green', 'gold', 'silver'],
        material: 'textured matte glass',
        weight: '265 g',
        description:
          'iPhone 11 Pro Max has a 6.5-inch1 all-screen Super Retina XDR display. The back is textured matte glass, and there\'s a stainless steel band around the frame. The side button is on the right side of the device. There are three 12 MP cameras on the back: Ultra Wide, Wide, and Telephoto. There\'s a Dual-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 19000,
        discount: 0,
        finalPrice: 19000,
        currency: 'EGP',
      },
      productRate: 4.7,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/identify-iphone-11pro-max.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'pro', 'max', '11'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 1231,
      productSales: 'gsu4mfhr_q0sttu63b',
    },
    {
      _id: '5ff8ba0e73f4d752445318ec',
      productId: 33,
      productName: 'iPhone 11',
      productInfo: {
        color: ['Purple', 'black', 'green', 'yellow', 'white', 'red'],
        material: 'glass',
        weight: '195 g',
        description:
          'iPhone 11 has a 6.1-inch1 Liquid Retina display. The back is glass, and there\'s an anodized aluminum band around the frame. The side button is on the right side of the device. There are two 12 MP cameras on the back: Ultra Wide and Wide. There\'s a Dual-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 13000,
        discount: 0,
        finalPrice: 13000,
        currency: 'EGP',
      },
      productRate: 4.7,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/identify-iphone-11-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', '11'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 1222,
      productSales: '3n0a2gyi_2zv77ycb1',
    },
    {
      _id: '5ff8ba0e73f4d752445318ed',
      productId: 34,
      productName: 'iPhone XS',
      productInfo: {
        color: ['silver', 'gold', 'space gray'],
        material: 'glass',
        weight: '182 g',
        description:
          'iPhone XS has a 5.8-inch1 all-screen Super Retina display. The back is glass, and there\'s a stainless steel band around the frame. The side button is on the right side of the device. There are 12 MP wide-angle and telephoto cameras on the back. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 10000,
        discount: 0,
        finalPrice: 10000,
        currency: 'EGP',
      },
      productRate: 4,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-xs-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'xs'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 0,
      productSales: '4hn530h_fnkhz5g5g',
    },
    {
      _id: '5ff8ba0e73f4d752445318ee',
      productId: 35,
      productName: 'iPhone XS Max',
      productInfo: {
        color: ['silver', 'gold', 'space gray'],
        material: 'glass',
        weight: '241 g',
        description:
          ' iPhone XS Max has a 6.5-inch1 all-screen Super Retina display. The back is glass, and there\'s a stainless steel band around the frame. The side button is on the right side of the device. There are 12 MP wide-angle and telephoto cameras on the back. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card.3 The IMEI is etched on the SIM tray. ',
      },
      productPrice: {
        currentPrice: 9000,
        discount: 10,
        finalPrice: 8100,
        currency: 'EGP',
      },
      productRate: 4.1,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-xs-max-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'xs', 'max'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 150,
      productSales: 'y5kezr0q_0ro7znhz3',
    },
    {
      _id: '5ff8ba0e73f4d752445318ef',
      productId: 36,
      productName: 'iPhone XR',
      productInfo: {
        color: ['black', 'white', 'yellow', 'blue', 'coral', 'red'],
        material: 'glass',
        weight: '210 g',
        description:
          ' iPhone XR has a 6.1-inch1 Liquid Retina display. The back is glass, and there\'s an anodized aluminum band around the frame. The side button is on the right side of the device. There is a 12 MP wide-angle camera on the back. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 9000,
        discount: 0,
        finalPrice: 9000,
        currency: 'EGP',
      },
      productRate: 3.9,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-xr/identify-iphone-xr-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'xr'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 100,
      productSales: 'pls171z_986bx9v6t',
    },
    {
      _id: '5ff8ba0e73f4d752445318f0',
      productId: 37,
      productName: 'iPhone X',
      productInfo: {
        color: ['space gray', 'silver'],
        material: 'glass',
        weight: '240 g',
        description:
          'iPhone X has a 5.8-inch1 all-screen Super Retina display. The back is glass, and there\'s a stainless steel band around the frame. The side button is on the right side of the device. There are 12 MP wide-angle and telephoto cameras on the back. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray. ',
      },
      productPrice: {
        currentPrice: 10500,
        discount: 0,
        finalPrice: 10500,
        currency: 'EGP',
      },
      productRate: 4.4,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-x-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'x'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 122,
      productSales: 'cdu9tdnn_9hdk1jpwt',
    },
    {
      _id: '5ff8ba0e73f4d752445318f1',
      productId: 38,
      productName: 'iPhone 8',
      productInfo: {
        color: ['gold', 'silver', 'red', 'space gray'],
        material: 'glass',
        weight: '220 g',
        description:
          ' The display is 4.7 inches (diagonal). The glass front is flat with curved edges. The back is glass, and there\'s an anodized aluminum band around the frame. The side button is on the right side of the device. The device has a solid-state Home button with Touch ID. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 9000,
        discount: 10,
        finalPrice: 8100,
        currency: 'EGP',
      },
      productRate: 4,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone8/iphone-8-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', '8'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 12,
      productSales: 't7od3bbb_72huw6v2t',
    },
    {
      _id: '5ff8ba0e73f4d752445318f2',
      productId: 39,
      productName: 'iPhone 8 Plus',
      productInfo: {
        color: ['gold', 'silver', 'red', 'space gray'],
        material: 'glass',
        weight: '195 g',
        description:
          'The display is 5.5 inches (diagonal). The glass front is flat with curved edges. The back is glass, and there\'s an anodized aluminum band around the frame. The side button is on the right side of the device. The device has a solid-state Home button with Touch ID. There are 12 MP wide-angle and telephoto cameras on the back. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 9999,
        discount: 0,
        finalPrice: 9999,
        currency: 'EGP',
      },
      productRate: 4.4,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone8plus/iphone-8plus-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', 'plus', '8'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 1,
      productSales: 'h0n6bk2_ruqb868wu',
    },
    {
      _id: '5ff8ba0e73f4d752445318f3',
      productId: 40,
      productName: 'iPhone 7',
      productInfo: {
        color: ['black', 'jet black', 'gold', 'rose gold', 'silver', 'red'],
        material: 'aluminum',
        weight: '190 g',
        description:
          'The display is 4.7 inches (diagonal). The glass front is flat with curved edges. The back is anodized aluminum. The Sleep/Wake button is on the right side of the device. The device has a solid-state Home button with Touch ID. There\'s a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a \'fourth form factor\' (4FF) nano-SIM card. The IMEI is etched on the SIM tray.',
      },
      productPrice: {
        currentPrice: 7000,
        discount: 0,
        finalPrice: 7000,
        currency: 'EGP',
      },
      productRate: 3.5,
      productImages: [
        'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone7/iphone7-colors.jpg',
      ],
      productType: 'Iphone',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'iphone', '7'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 124,
      productSales: 'qoc3cvr_gwz7jf91k',
    },
    {
      _id: '5ff8ba0e73f4d752445318f4',
      productId: 41,
      productName: 'HUAWEI Mate 40 Pro',
      productInfo: {
        color: ['black', 'silver'],
        material: 'platinum',
        weight: '350 g',
        description:
          '5nm Kirin 9000 5G SoC Chipset,Ultra Vision Cine Camera and Selfie Camera,Dual HUAWEI SuperCharge',
      },
      productPrice: {
        currentPrice: 16500,
        discount: 0,
        finalPrice: 16500,
        currency: 'EGP',
      },
      productRate: 4.5,
      productImages: [
        'https://images-na.ssl-images-amazon.com/images/I/618cyFfBFkL._AC_SX466_.jpg',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'mate', 'pro', '40'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 20,
      productSales: 'n9dvgje_yid6604by',
    },
    {
      _id: '5ff8ba0e73f4d752445318f5',
      productId: 42,
      productName: 'HUAWEI P40 Pro',
      productInfo: {
        color: ['black', 'silver'],
        material: 'glass',
        weight: '350 g',
        description:
          'Ultra Vision Leica Quad Camera, 1/1.28 inch Sensor,Kirin 990 5G,90 Hz Display, IP68',
      },
      productPrice: {
        currentPrice: 14579,
        discount: 0,
        finalPrice: 16479,
        currency: 'EGP',
      },
      productRate: 4.5,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40-pro/p40-pro-silver.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'pro', 'p40'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 360,
      productSales: 'ujnrisgg_xo19esi1t',
    },
    {
      _id: '5ff8ba0e73f4d752445318f6',
      productId: 43,
      productName: 'HUAWEI Mate Xs',
      productInfo: {
        color: ['black'],
        material: 'glass',
        weight: '198 g',
        description:
          '8\' Foldable FullView Display,Revolutionary Multitasking Interactive Experience , Kirin 990 5G SoC',
      },
      productPrice: {
        currentPrice: 13999,
        discount: 0,
        finalPrice: 13999,
        currency: 'EGP',
      },
      productRate: 4.2,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate-x-s/matexs-plp.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'mate', 'xs'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 302,
      productSales: 'z7i4pcxo_p4a6xe0ik',
    },
    {
      _id: '5ff8ba0e73f4d752445318f7',
      productId: 44,
      productName: 'HUAWEI nova 7',
      productInfo: {
        color: ['black', 'purple'],
        material: 'glass',
        weight: '223 g',
        description:
          'Kirin 985 5G SoC , 64MP AI Quad Camera , Dual-View Video.',
      },
      productPrice: {
        currentPrice: 8999,
        discount: 0,
        finalPrice: 8999,
        currency: 'EGP',
      },
      productRate: 3.6,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/nova7/silver.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'nova', '7'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 431,
      productSales: '783waxkc_ezi1oe4ue',
    },
    {
      _id: '5ff8ba0e73f4d752445318f8',
      productId: 45,
      productName: 'HUAWEI nova 7i',
      productInfo: {
        color: ['black', 'purple', 'gray'],
        material: 'glass',
        weight: '228 g',
        description:
          '48 MP Quad AI Cameras , 40 W HUAWEI SuperCharge , 8 GB RAM + 128 GB ROM.',
      },
      productPrice: {
        currentPrice: 10499,
        discount: 0,
        finalPrice: 10499,
        currency: 'EGP',
      },
      productRate: 3.9,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/nova7i/nova-7i-list-skyline-grey.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'nova', '7i'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 131,
      productSales: 'bz9yex1_aur843m8m',
    },
    {
      _id: '5ff8ba0e73f4d752445318f9',
      productId: 46,
      productName: 'HUAWEI Y7a',
      productInfo: {
        color: ['black', 'green'],
        material: 'glass',
        weight: '251 g',
        description:
          '22.5 W HUAWEI SuperCharge , 5,000 mAh Large Battery , 48 MP Quad AI Camera.',
      },
      productPrice: {
        currentPrice: 6245,
        discount: 0,
        finalPrice: 6245,
        currency: 'EGP',
      },
      productRate: 3,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y7a/list-img/green-list.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'y7a'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 11,
      productSales: 'duuvih09_r69i4pd5r',
    },
    {
      _id: '5ff8ba0e73f4d752445318fa',
      productId: 47,
      productName: 'HUAWEI Y9a',
      productInfo: {
        color: ['black', 'purple'],
        material: 'glass',
        weight: '294 g',
        description:
          '64 MP Quad Camera , 40 W HUAWEI SuperCharge , 8 GB + 128 GB.',
      },
      productPrice: {
        currentPrice: 7750,
        discount: 0,
        finalPrice: 7750,
        currency: 'EGP',
      },
      productRate: 3,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/y9a/list-img-black.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'y9a'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 78,
      productSales: 'yurbuq9f_z8aq4cxt6',
    },
    {
      _id: '5ff8ba0e73f4d752445318fb',
      productId: 48,
      productName: 'HUAWEI Y5p',
      productInfo: {
        color: ['black', 'purple', 'green'],
        material: 'glass',
        weight: '294 g',
        description:
          '5.45\' HUAWEI FullView Display , 32 GB Large storage , 3,020 mAh Big Battery.',
      },
      productPrice: {
        currentPrice: 4650,
        discount: 0,
        finalPrice: 4650,
        currency: 'EGP',
      },
      productRate: 3.3,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y5p/green.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'y5p'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 8,
      productSales: 'ju0esuj9_mbkj5kzdv',
    },
    {
      _id: '5ff8ba0e73f4d752445318fc',
      productId: 49,
      productName: 'HUAWEI Y8p',
      productInfo: {
        color: ['black', 'green'],
        material: 'glass',
        weight: '232 g',
        description:
          '48 MP AI Triple Camera , 128 GB Storage , 6.3” OLED Display.',
      },
      productPrice: {
        currentPrice: 5450,
        discount: 0,
        finalPrice: 5450,
        currency: 'EGP',
      },
      productRate: 2.9,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y8p/breathing-crystal.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'y8p'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 54,
      productSales: '1zxemte8_eki9n0s5k',
    },
    {
      _id: '5ff8ba0e73f4d752445318fd',
      productId: 50,
      productName: 'HUAWEI Y8s',
      productInfo: {
        color: ['black', 'green'],
        material: 'glass',
        weight: '212 g',
        description:
          '48 MP Super Clear Camera , Super Night Shot , 4000 mAh Big Battery.',
      },
      productPrice: {
        currentPrice: 6710,
        discount: 0,
        finalPrice: 6710,
        currency: 'EGP',
      },
      productRate: 3.4,
      productImages: [
        'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y8s/y8s-listimage-green.png',
      ],
      productType: 'HUAWEI',
      productCategory: 'Electronics',
      productSubCategory: 3,
      keywords: ['mobile', 'smart phone', 'huawei', 'y8s'],
      warehouseId: '5ff7b6bb1c1a3e395fc30537',
      productStock: 0,
      productSales: 'bgm48bv8_ardx4womj',
    },
  ]; */
  products:Product[];
  cartProducts = [];
  baseUrl = 'http://localhost:3000/';
  productAdded = new EventEmitter<Product[]>();

  constructor(private httpClinet : HttpClient) {}
  getAllProducts() {
    return this.httpClinet.get(this.baseUrl+'api/products');
  }
  productById(id: string) {
    return this.httpClinet.get(this.baseUrl+'api/product/id/'+id);
  }
  productByName(name: string) {
    return this.httpClinet.get(this.baseUrl+'api/product/name/'+name);
  }
  updateProduct(product: Product) {
    return this.httpClinet.put(this.baseUrl+'api/product/'+product._id,product);
  }
  deleteProduct(id: string) {
    return this.httpClinet.delete(this.baseUrl+'api/product/'+id);
  }
  addProduct(product: Product) {
    console.log(product);

    return this.httpClinet.post(this.baseUrl+'api/product/add',product);
  }

  addProductsToCart(products) {
    this.cartProducts = products.slice();
    this.productAdded.emit(this.cartProducts);
  }

  searchProductsByKeywords(...params) {
    var result = this.products.filter((p) => {
      return p.keywords.includes(params[0]);
    });
    for (let index = 1; index < params.length; index++) {
      result = result.filter((p) => {
        return p.keywords.includes(params[index]);
      });
    }

    return result;
  }
}
