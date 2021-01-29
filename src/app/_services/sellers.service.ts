import { Seller } from '../_model/sellers';

export class SellersService {
    sellers: Seller[] = [
        {
            _id: '5ff61753473e1c27b8e6cea1',
            sellerName: 'Schmitt, Ortiz and Jacobi',
            sellerId: '38pozurx_j0noov1f5',
            category: 'Electronics',
            location: {
                latitude: -48.7675,
                longitude: -16.594146387
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/584/922/non_2x/bird-and-wing-logo-vector-template.jpg',
            shortDesc: 'Schmitt, Ortiz and Jacobi Short Description',
            websiteURL: 'http://SchmittOrtizJacobi.com/'
        }, {
            _id: '5ff61753473e1c27b8e6cea6',
            sellerName: 'Schaden Inc',
            sellerId: 'kqesyl6a_pnv0kbbjl',
            category: 'Furniture',
            location: {
                latitude: 16.34575,
                longitude: -4.959382118
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/578/926/non_2x/bat-black-logo-template-white-background-icons-app-vector.jpg',
            shortDesc: 'Schaden Inc Short Description',
            websiteURL: 'http://SchadenInc.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ce8d',
            sellerName: 'Armstrong, Gaylord and McGlynn',
            sellerId: 'uoqtjrkf_w37gscwgm',
            category: 'Jewelery',
            location: {
                latitude: -163.20023,
                longitude: 36.048264491
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/579/226/non_2x/vector-business-finance-logo-template.jpg',
            shortDesc: 'Armstrong, Gaylord and McGlynn Short Description',
            websiteURL: 'http://ArmstrongGaylordMcGlynn.com/'
        }, {
            _id: '5ff61753473e1c27b8e6cea7',
            sellerName: 'Schroeder, Lehner and Nitzsche',
            sellerId: '7ztgxkbe_h6xxberh9',
            category: 'Garden',
            location: {
                latitude: 176.91495,
                longitude: 81.18666385
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/612/107/non_2x/star-logo-template-vector-icon-illustration-design.jpg',
            shortDesc: 'Schroeder, Lehner and Nitzsche Short Description',
            websiteURL: 'http://SchroederLehnerNitzsche.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ceb1',
            sellerName: 'Herzog, Zemlak and Klein',
            sellerId: 'xdpd0n7_a5dz7c7yz',
            category: 'Electronics',
            location: {
                latitude: 90.19834,
                longitude: -34.798934745
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/599/214/non_2x/book-reading-logo-and-symbols-template-icons-vector.jpg',
            shortDesc: 'Herzog, Zemlak and Klein Short Description',
            websiteURL: 'http://HerzogZemlakKlein.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ceb2',
            sellerName: 'Reinger - Sanford',
            sellerId: 'qpjwxww_ca5880j3s',
            category: 'Health',
            location: {
                latitude: -152.17174,
                longitude: -53.925310674
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/599/252/non_2x/vector-book-reading-logo-and-symbols-template-icons.jpg',
            shortDesc: 'Reinger - Sanford Short Description',
            websiteURL: 'http://ReingerSanford.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ce92',
            sellerName: 'Halvorson - Johnson',
            sellerId: 'w9qbt2be_iphvvk7x9',
            category: 'Books',
            location: {
                latitude: 71.7421,
                longitude: 48.444763804
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/564/007/non_2x/finance-logo-and-symbols-vector-concept.jpg',
            shortDesc: 'Halvorson - Johnson Short Description',
            websiteURL: 'http://HalvorsonJohnson.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ce98',
            sellerName: 'Will, Daniel and Kuhlman',
            sellerId: 'tc8k8qpt_wi86cd8oz',
            category: 'Toys',
            location: {
                latitude: -76.6613,
                longitude: 6.9000072513
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/563/535/non_2x/finance-logo-and-symbols-vector-concept.jpg',
            shortDesc: 'Will, Daniel and Kuhlman Short Description',
            websiteURL: 'http://WillDanielKuhlman.com/'
        }, {
            _id: '5ff61753473e1c27b8e6cea0',
            sellerName: 'Pfannerstill, Waelchi and Raynor',
            sellerId: 'mbrj93jl_2t7cdrprs',
            category: 'Home',
            location: {
                latitude: 60.95377,
                longitude: -29.611926269
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/584/832/non_2x/bird-and-wing-logo-vector-template.jpg',
            shortDesc: 'Pfannerstill, Waelchi and Raynor Short Description',
            websiteURL: 'http://PfannerstillWaelchiRaynor.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ceb9',
            sellerName: 'Mann - Jenkins',
            sellerId: '0cmio9b_2kpjyrqvg',
            category: 'Furniture',
            location: {
                latitude: -59.97579,
                longitude: -53.205117041
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/596/339/non_2x/pyramid-logo-and-symbol-business-abstract-design-template-vector.jpg',
            shortDesc: 'Mann - Jenkins Short Description',
            websiteURL: 'http://MannJenkins.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ce91',
            sellerName: 'Marquardt, Brakus and Wilderman',
            sellerId: 'yva670rd_xp4zptce0',
            category: 'Health',
            location: {
                latitude: 28.199139,
                longitude: -64.679373317
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/579/628/non_2x/business-finance-logo-template-vector.jpg',
            shortDesc: 'Marquardt, Brakus and Wilderman Short Description',
            websiteURL: 'http://MarquardtBrakusWilderman.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ce97',
            sellerName: 'Reichel, Brekke and Grady',
            sellerId: '3zevjxnq_ef9bz77u1',
            category: 'Furniture',
            location: {
                latitude: 151.43313,
                longitude: -62.953942434
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/563/839/non_2x/finance-logo-and-symbols-vector-concept.jpg',
            shortDesc: 'Reichel, Brekke and Grady Short Description',
            websiteURL: 'http://ReichelBrekkeGrady.com/'
        }, {
            _id: '5ff61753473e1c27b8e6cea2',
            sellerName: 'Graham, Pacocha and Paucek',
            sellerId: 'ps2vkjdm_1e11gaoeh',
            category: 'Games',
            location: {
                latitude: 27.710009,
                longitude: -8.738150011
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/585/013/non_2x/bird-and-wing-logo-vector-template.jpg',
            shortDesc: 'Graham, Pacocha and Paucek Short Description',
            websiteURL: 'http://GrahamPacochaPaucek.com/'
        }, {
            _id: '5ff61753473e1c27b8e6cea8',
            sellerName: 'Heller, Larson and Kuhic',
            sellerId: 'l25xq1k8_lu23vsed6',
            category: 'Home',
            location: {
                latitude: -106.7931,
                longitude: -35.209501957
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/612/445/non_2x/star-logo-template-vector-icon-illustration-design.jpg',
            shortDesc: 'Heller, Larson and Kuhic Short Description',
            websiteURL: 'http://HellerLarsonKuhic.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ce8c',
            sellerName: 'Monahan, Thompson and Walter',
            sellerId: '9wk4ceeu_w2onuga1x',
            category: 'Electronics',
            location: {
                latitude: 149.54541,
                longitude: -73.360648364
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/579/056/non_2x/business-finance-logo-template-vector.jpg',
            shortDesc: 'Monahan, Thompson and Walter Short Description',
            websiteURL: 'http://MonahanThompsonWalter.com/'
        }, {
            _id: '5ff61753473e1c27b8e6cea4',
            sellerName: 'Macejkovic Inc',
            sellerId: 'ahthtrp_ufh6iw3oh',
            category: 'Music',
            location: {
                latitude: -145.74749,
                longitude: 87.84537932
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/585/554/non_2x/bird-and-wing-logo-vector-template.jpg',
            shortDesc: 'Macejkovic Inc Short Description',
            websiteURL: 'http://MacejkovicInc.com/'
        }, {
            _id: '5ff61753473e1c27b8e6cea9',
            sellerName: 'Wilkinson Inc',
            sellerId: 'pwmw300b_c603i9oem',
            category: 'Industrial',
            location: {
                latitude: -30.77997,
                longitude: -20.647845898
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/579/011/non_2x/star-logo-template-vector-icon-illustration-design.jpg',
            shortDesc: 'Wilkinson Inc Short Description',
            websiteURL: 'http://WilkinsonInc.com/'
        }, {
            _id: '5ff61753473e1c27b8e6ceae',
            sellerName: 'Nienow and Sons',
            sellerId: 'p0fs5uzs_1lfbovu6u',
            category: 'Furniture',
            location: {
                latitude: 148.61019,
                longitude: 20.394189738
            },
            logo: 'https://static.vecteezy.com/system/resources/previews/000/599/745/non_2x/vector-business-corporate-s-letter-logo.jpg',
            shortDesc: 'Nienow and Sons Short Description',
            websiteURL: 'http://NienowSons.com/'
        }
    ];

    constructor() { }



    getAllSellers(): Seller[] {

        return this.sellers.slice();

    }
    getSellerById(id): Seller {

        return this.sellers.find(p => p._id === id);

    }

    addSeller(seller: Seller) {

        const newSeller: Seller = {
            _id: seller._id,
            sellerName: seller.sellerName,
            sellerId: seller.sellerId,
            category: seller.category,
            location: seller.location,
            logo: seller.logo,
            shortDesc: seller.shortDesc,
            websiteURL: seller.websiteURL,



        };
        this.sellers.push(newSeller);
        // console.log(this.sellers);
    }

    updateSeller(seller: Seller): void {
        const index = this.sellers.findIndex((p) => p._id === seller._id);
        this.sellers[index] = {
            _id: seller._id,
            sellerName: seller.sellerName,
            sellerId: seller.sellerId,
            category: seller.category,
            location: seller.location,
            logo: seller.logo,
            shortDesc: seller.shortDesc,
            websiteURL: seller.websiteURL,
        };
    }

    deleteSeller(id: string) {
        const index = this.sellers.findIndex((p) => p._id === id);
        this.sellers.splice(index, 1);
    }
}
