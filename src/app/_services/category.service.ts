import { Injectable } from '@angular/core';
import { Category } from '../_model/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category: Category[];
  constructor() {
    this.category = [
      /* 1 */
      {
        _id: '5ff7bc011c1a3e395fc3053c',
        name: 'Electronics',
        sub: [
          'Accessories & Supplies ',
          'Camera & Photo',
          'Car & Vehicle Electronics',
          'Cell Phones & Accessories',
          'Computers & Accessories',
          'GPS & Navigation',
          'Headphones',
          'Home Audio',
          'Office Electronics',
          'Portable Audio & Video',
          'Security & Surveillance',
          'Service Plans',
          'Television & Video',
          'Video Game Consoles & Accessories',
          'Video Projectors',
          'Wearable Technology',
          'eBook Readers & Accessories',
        ],
      },

      /* 2 */
      {
        _id: '5ff7bc741c1a3e395fc3053d',
        name: 'Computers',
        sub: [
          'Computer Accessories & Peripherals',
          'Computer Components',
          'Computers & Tablets',
          'Data Storage',
          'External Components',
          'Laptop Accessories',
          'Monitors',
          'Networking Products',
          'Power Strips & Surge Protectors',
          'Printers',
          'Scanners',
          'Servers',
          'Tablet Accessories',
          'Tablet Replacement Parts',
          'Warranties & Services',
        ],
      },

      /* 3 */
      {
        _id: '5ff7bcb11c1a3e395fc3053e',
        name: 'Movies & Television',
        sub: [
          'Movies',
          'TV Shows',
          'Blu-ray',
          '4K Ultra HD',
          'Best Sellers',
          "Today's Deals",
          'New Releases',
          'Pre-orders',
          'Kids & Family',
          'Prime Video',
        ],
      },

      /* 4 */
      {
        _id: '5ff7bcf21c1a3e395fc3053f',
        name: 'Beauty and personal care',
        sub: [
          'Makeup',
          'Skin Care',
          'Hair Care',
          'Fragrance',
          'Foot, Hand & Nail Care',
          'Tools & Accessories',
          'Shave & Hair Removal',
          'Personal Care',
          'Oral Care',
        ],
      },

      /* 5 */
      {
        _id: '5ff7bd231c1a3e395fc30540',
        name: 'Home and Kitchen',
        sub: [
          "Kids' Home Store",
          'Kitchen & Dining',
          'Bedding',
          'Bath',
          'Furniture',
          'Home Décor',
          'Wall Art',
          'Lighting & Ceiling Fans',
          'Seasonal Décor',
          'Event & Party Supplies',
          'Heating, Cooling & Air Quality',
          'Irons & Steamers',
          'Vacuums & Floor Care',
          'Storage & Organization',
          'Cleaning Supplies',
        ],
      },

      /* 6 */
      {
        _id: '5ff7bdeb1c1a3e395fc30541',
        name: 'Industrial and Scientific',
        sub: [
          'Abrasive & Finishing Products',
          'Additive Manufacturing Products',
          'Commercial Door Products',
          'Cutting Tools',
          'Fasteners',
          'Filtration',
          'Food Service Equipment & Supplies',
          'Hydraulics, Pneumatics & Plumbing',
          'Industrial Electrical',
          'Industrial Hardware',
          'Industrial Power & Hand Tools',
          'Janitorial & Sanitation Supplies',
          'Lab & Scientific Products',
          'Material Handling Products',
          'Occupational Health & Safety Products',
          'Packaging & Shipping Supplies',
          'Power Transmission Products',
          'Professional Dental Supplies',
          'Professional Medical Supplies',
          'Raw Materials',
          'Retail Store Fixtures & Equipment',
          'Robotics',
          'Science Education',
          'Tapes, Adhesives & Sealants',
          'Test, Measure & Inspect',
        ],
      },

      /* 7 */
      {
        _id: '5ff7be1d1c1a3e395fc30542',
        name: 'Video Games',
        sub: [
          'Video Games',
          'PlayStation 4',
          'PlayStation 3',
          'Xbox One',
          'Xbox 360',
          'Nintendo Switch',
          'Wii U',
          'Wii',
          'PC',
          'Mac',
          'Nintendo 3DS & 2DS',
          'Nintendo DS',
          'PlayStation Vita',
          'Sony PSP',
          'Retro Gaming & Microconsoles',
          'Accessories',
          'Digital Games',
          'Kids & Family',
        ],
      },

      /* 8 */
      {
        _id: '5ff7be7f1c1a3e395fc30543',
        name: "Men's Fashion",
        sub: [
          'Clothing',
          'Shoes',
          'Watches',
          'Accessories',
          "Women's Fashion",
          "Girls' Fashion",
          "Boys' Fashion",
        ],
      },

      /* 9 */
      {
        _id: '5ff7bec01c1a3e395fc30544',
        name: "Girls' Fashion",
        sub: [
          'Clothing',
          'Shoes',
          'Jewelry',
          'Watches',
          'Accessories',
          'School Uniforms',
          "Women's Fashion",
          "Men's Fashion",
          "Boys' Fashion",
        ],
      },

      /* 10 */
      {
        _id: '5ff7beed1c1a3e395fc30545',
        name: "Boys' Fashion",
        sub: [
          'Clothing',
          'Shoes',
          'Jewelry',
          'Watches',
          'Accessories',
          'School Uniforms',
          "Women's Fashion",
          "Men's Fashion",
          "Boys' Fashion",
        ],
      },

      /* 11 */
      {
        _id: '5ff7bf111c1a3e395fc30546',
        name: 'Automotive',
        sub: [
          'Car Care',
          'Car Electronics & Accessories',
          'Exterior Accessories',
          'Interior Accessories',
          'Lights & Lighting Accessories',
          'Motorcycle & Powersports',
          'Oils & Fluids',
          'Paint & Paint Supplies',
          'Performance Parts & Accessories',
          'Replacement Parts',
          'RV Parts & Accessories',
          'Tires & Wheels',
          'Tools & Equipment',
          'Automotive Enthusiast Merchandise',
          'Heavy Duty & Commercial Vehicle Equipment',
        ],
      },

      /* 12 */
      {
        _id: '5ff7bf7d1c1a3e395fc30547',
        name: 'Arts & Crafts',
        sub: [
          'Painting, Drawing & Art Supplies',
          'Beading & Jewelry Making',
          'Crafting',
          'Fabric',
          'Fabric Decorating',
          'Knitting & Crochet',
          'Needlework',
          'Organization, Storage & Transport',
          'Printmaking',
          'Scrapbooking & Stamping',
          'Sewing',
          'Party Decorations & Supplies',
          'Gift Wrapping Supplies',
        ],
      },

      /* 13 */
      {
        _id: '5ff7bff91c1a3e395fc30548',
        name: 'Smart Home',
        sub: [
          'Amazon Smart Home',
          'Lighting',
          'Door Locks',
          'Cameras',
          'Plugs',
          'Other Smart Solutions',
          'Thermostats',
          'Security Systems',
          'Televisions',
          'Speakers',
          'Voice Assistants',
          'Kitchen',
          'Vacuums',
          'Printers and PC',
          'Network and Wifi',
        ],
      },

      /* 14 */
      {
        _id: '5ff7c0301c1a3e395fc30549',
        name: 'Tools & Home Improvement',
        sub: [
          'Tools & Home Improvement',
          'Appliances',
          'Building Supplies',
          'Electrical',
          'Hardware',
          'Kitchen & Bath Fixtures',
          'Light Bulbs',
          'Lighting & Ceiling Fans',
          'Measuring & Layout Tools',
          'Painting Supplies & Wall Treatments',
          'Power & Hand Tools',
          'Rough Plumbing',
          'Safety & Security',
          'Storage & Home Organization',
          'Welding & Soldering',
        ],
      },

      /* 15 */
      {
        _id: '5ff7c0a31c1a3e395fc3054a',
        name: "Women's Fashion",
        sub: [
          'Clothing',
          'Shoes',
          'Jewelry',
          'Watches',
          'Handbags',
          'Accessories',
          "Men's Fashion",
          "Girls' Fashion",
          "Boys' Fashion",
        ],
      },

      /* 16 */
      {
        _id: '5ff7c0d71c1a3e395fc3054b',
        name: 'Sports and Outdoors',
        sub: [
          'Sports and Outdoors',
          'Outdoor Recreation',
          'Sports & Fitness',
          'Fan Shop',
        ],
      },

      /* 17 */
      {
        _id: '5ff7c1021c1a3e395fc3054c',
        name: 'Pet supplies',
        sub: [
          'Dogs',
          'Cats',
          'Fish & Aquatic Pets',
          'Birds',
          'Horses',
          'Reptiles & Amphibians',
          'Small Animals',
        ],
      },
    ];
  }

  getAllCategories(): Category[] {
    return this.category.slice();
  }

  getAllSubCategoriesOfACategry(categoryName: string): string[] {
    return this.category.find((cat) => {
      cat.name == categoryName;
    }).sub;
  }

  addSubCategory(categoryName: string, SubCategoryName: string): void {
    const category = this.category.find((cat) => {
      cat.name == categoryName;
    });

    category.sub.push(SubCategoryName);
  }

  //removeSubCategory
}
