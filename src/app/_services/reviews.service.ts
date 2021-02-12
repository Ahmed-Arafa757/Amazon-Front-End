import { EventEmitter } from '@angular/core';
import { Review } from '../_model/reviews';

export class ReviewsService {
  reviews: Review[] = [
    {
      id: 1,
      reviewerID: 'qxgk_4695_9606',
      reviewerName: 'Mr. Myron Wilkinson',
      reviewTime: 'Sun, Aug 15 2010 13:15:48 GMT',
      reviewSummary: 'Ducimus ipsa natus.',
      fullReview:
        'Voluptatum vel asperiores consectetur quia nisi dolores et. Maxime sunt possimus sint et numquam quae. Officia sed velit. Facere non voluptatem repellat nostrum odit. Vel necessitatibus possimus. Quidem vitae molestiae autem autem et quis quam assumenda.',
      helpful: 1,
      reviewVote: 2,
      productID: '5ff8ba0e73f4d752445318cc',
    },

    {
      id: 3,
      reviewerID: 'q2zx_7032_5071',
      reviewerName: 'Iris Parisian',
      reviewTime: 'Thu, Jun 23 2011 22:42:14 GMT',
      reviewSummary: 'Itaque magnam ullam.',
      fullReview:
        'Accusantium rem modi totam rerum mollitia. Magni aut cupiditate rerum rerum odio aut odio aut. Beatae sed velit ad. Neque recusandae perspiciatis est minus omnis ex quia at. Animi fuga mollitia qui est adipisci laborum fugiat. Voluptatibus iste sequi nesciunt ea sint aut est eaque et.',
      helpful: 5,
      reviewVote: 4,
      productID: '5ff8ba0e73f4d752445318cd',
    },

    {
      id: 10,
      reviewerID: 'thm1_2177_9321',
      reviewerName: 'Mrs. Isabel Russel',
      reviewTime: 'Sat, Oct 15 2011 04:29:29 GMT',
      reviewSummary: 'Qui neque molestiae.',
      fullReview:
        'Voluptas ex deserunt earum odit. Odit est labore eos. Labore rerum animi nostrum fuga facilis excepturi ducimus quaerat. Blanditiis ab similique omnis sunt odit mollitia. Voluptas voluptas distinctio. Ut dolor velit error harum fuga minima.',
      helpful: 1,
      reviewVote: 4,
      productID: '5ff8ba0e73f4d752445318ce',
    },

    {
      id: 8,
      reviewerID: 'tg4c_7626_9973',
      reviewerName: 'Candice VonRueden',
      reviewTime: 'Thu, Nov 10 2011 20:08:24 GMT',
      reviewSummary: 'Illo qui modi.',
      fullReview: 'Quia sunt totam est. Distinctio reprehenderit qui.',
      helpful: 1,
      reviewVote: 5,
      productID: '5ff8ba0e73f4d752445318cf',
    },

    {
      id: 9,
      reviewerID: 'tg4c_7626_9973',
      reviewerName: 'Candice VonRueden',
      reviewTime: 'Fri, Nov 11 2011 18:02:00 GMT',
      reviewSummary: 'Pllo qui bodi.',
      fullReview: 'Kuia eunt totam est. Distinctio reprehenderit qui.',
      helpful: 1,
      reviewVote: 5,
      productID: '5ff8ba0e73f4d752445318d0',
    },

    {
      id: 6,
      reviewerID: 'r9co_5914_5532',
      reviewerName: 'Natalie Kautzer',
      reviewTime: 'Sat, Nov 15 2014 08:48:38 GMT',
      reviewSummary: 'Accusantium qui exercitationem.',
      fullReview:
        'Ex minima aspernatur molestias accusamus enim. Placeat repellendus nam quo fugiat.',
      helpful: 2,
      reviewVote: 2,
      productID: '5ff8ba0e73f4d752445318d1',
    },

    {
      id: 16,
      reviewerID: 'wemx_9478_2546',
      reviewerName: "Sonya O'Keefe",
      reviewTime: 'Wed, Mar 04 2015 13:10:08 GMT',
      reviewSummary: 'Autem magni qui.',
      fullReview:
        'Voluptatibus voluptas distinctio omnis deserunt illum ea alias. Possimus quia ut praesentium voluptatum ut saepe temporibus consequatur sed. Esse laboriosam mollitia id expedita distinctio est.',
      helpful: 2,
      reviewVote: 1,
      productID: '5ff8ba0e73f4d752445318d2',
    },
    {
      id: 12,
      reviewerID: 'egp7_3421_4924',
      reviewerName: 'Marvin Stanton',
      reviewTime: 'Fri, Aug 21 2015 05:45:32 GMT',
      reviewSummary: 'Non enim ut.',
      fullReview: 'Tempore blanditiis aut. Quia sit non.',
      helpful: 2,
      reviewVote: 5,
      productID: '5ff8ba0e73f4d752445318d3',
    },

    {
      id: 13,
      reviewerID: '0skv_1333_5941',
      reviewerName: 'Jesus Jakubowski',
      reviewTime: 'Thu, Jun 09 2016 10:27:11 GMT',
      reviewSummary: 'Dolore eum occaecati.',
      fullReview:
        'Ea facilis est. Non est veniam voluptates ad ut modi et doloribus. Commodi libero harum optio sit temporibus. Et sit ut incidunt quam non vel.',
      helpful: 5,
      reviewVote: 4,
      productID: '5ff8ba0e73f4d752445318d4',
    },

    {
      id: 17,
      reviewerID: '8gxf_4089_4492',
      reviewerName: 'Gustavo Funk',
      reviewTime: 'Wed, Jun 29 2016 10:12:56 GMT',
      reviewSummary: 'Quas quasi nam.',
      fullReview:
        'Quia porro minus labore perferendis. Qui reiciendis et aut ut dolore inventore ratione aliquam nemo. Porro harum tenetur veritatis eos nemo. Nihil amet ex ea eius neque occaecati. Quibusdam sapiente et et dolor numquam nulla.',
      helpful: 1,
      reviewVote: 2,
      productID: '5ff8ba0e73f4d752445318d5',
    },

    {
      id: 19,
      reviewerID: '0o6g_2414_9691',
      reviewerName: 'Sylvia Dach',
      reviewTime: 'Tue, Sep 13 2016 08:41:46 GMT',
      reviewSummary: 'Delectus doloremque est.',
      fullReview:
        'Exercitationem doloribus sit pariatur dicta ut beatae maiores. Aut eum quia incidunt eum ut architecto ipsam. Ea qui eaque delectus veritatis iste. Vel et alias distinctio.',
      helpful: 2,
      reviewVote: 4,
      productID: '5ff8ba0e73f4d752445318d6',
    },

    {
      id: 18,
      reviewerID: '0o6g_2414_9691',
      reviewerName: 'Mairo luigi',
      reviewTime: 'Tue, Sep 13 2016 20:10:30 GMT',
      reviewSummary: 'Kelectus Ooloremque est.',
      fullReview:
        'Loerm doloribus sit pariatur dicta ut beatae maiores. Aut eum quia incidunt eum ut architecto ipsam. Ea qui eaque delectus veritatis iste. Vel et alias distinctio.',
      helpful: 2,
      reviewVote: 4,
      productID: '5ff8ba0e73f4d752445318d7',
    },

    {
      id: 14,
      reviewerID: 'za1c_8424_6150',
      reviewerName: 'Robin Ankunding',
      reviewTime: 'Fri, Oct 14 2016 17:30:27 GMT',
      reviewSummary: 'Ipsum autem omnis.',
      fullReview:
        'Facilis minima nesciunt voluptatem quae et et omnis perspiciatis dolores. Officiis repudiandae debitis et iure quis corporis. Dolor sit cupiditate.',
      helpful: 5,
      reviewVote: 1,
      productID: '5ff8ba0e73f4d752445318d8',
    },

    {
      id: 2,
      reviewerID: 'p88g_8591_2694',
      reviewerName: 'Rudolph Mohr III',
      reviewTime: 'Tue, Dec 26 2017 23:57:40 GMT',
      reviewSummary: 'Rerum ullam molestiae.',
      fullReview:
        'Dolor reprehenderit placeat. Numquam non maxime inventore expedita iusto sed magni. Sed qui ut amet facere laudantium ea sed. Velit omnis earum voluptas quo sit autem modi. Velit esse et.',
      helpful: 2,
      reviewVote: 4,
      productID: '5ff8ba0e73f4d752445318d9',
    },

    {
      id: 15,
      reviewerID: 'ppjh_5946_8561',
      reviewerName: 'Jason Hyatt',
      reviewTime: 'Sun, Jun 17 2018 20:33:36 GMT',
      reviewSummary: 'Et hic eligendi.',
      fullReview:
        'Culpa sequi sit velit ut repellendus molestiae ipsum excepturi. Laborum rerum deserunt omnis ducimus. Commodi corporis dolores numquam.',
      helpful: 5,
      reviewVote: 3,
      productID: '5ff8ba0e73f4d752445318da',
    },

    {
      id: 4,
      reviewerID: 'ik8h_1420_9214',
      reviewerName: 'Mercedes Rodriguez',
      reviewTime: 'Sat, Jul 21 2018 08:41:53 GMT',
      reviewSummary: 'Ut quia delectus.',
      fullReview:
        'Earum vel exercitationem voluptas dolores et accusantium. Soluta non et et blanditiis laboriosam sapiente sapiente. Voluptas consectetur rem omnis voluptas sit in non autem architecto. Facere iure harum nihil dicta quae. Aliquam nostrum quisquam magnam placeat est qui labore. Voluptates ab corporis facilis est et dolorem.',
      helpful: 3,
      reviewVote: 1,
      productID: '5ff8ba0e73f4d752445318db',
    },

    {
      id: 11,
      reviewerID: 'huh3_2784_6772',
      reviewerName: 'Mr. Myra Johns',
      reviewTime: 'Sat, Sep 29 2018 06:05:13 GMT',
      reviewSummary: 'Et aliquam et.',
      fullReview:
        'Nisi et nihil aperiam explicabo facere dolorum nostrum quaerat inventore. Ad blanditiis dolores. Sit qui nihil autem qui harum ab. Illo provident ratione aliquam architecto voluptate dolorum. Et voluptatem perferendis nihil dolorum dolorem aut rerum perferendis. Pariatur quisquam natus perferendis ut perspiciatis incidunt tenetur.',
      helpful: 1,
      reviewVote: 3,
      productID: '5ff8ba0e73f4d752445318dc',
    },

    {
      id: 5,
      reviewerID: 'tgik_7541_7128',
      reviewerName: 'Terrance Lakin',
      reviewTime: 'Wed, Dec 11 2019 06:33:07 GMT',
      reviewSummary: 'Unde fugit voluptas.',
      fullReview:
        'Repudiandae molestias repudiandae. Vitae fugiat qui aliquid quo voluptatem ea voluptatem illum. Explicabo quaerat autem necessitatibus aliquid omnis distinctio. Explicabo reprehenderit consectetur ut et similique vitae. Sed ipsam sed eos cupiditate ipsa. Nisi totam eius porro qui qui.',
      helpful: 4,
      reviewVote: 3,
      productID: '5ff8ba0e73f4d752445318dd',
    },

    {
      id: 20,
      reviewerID: '3nuw_6674_6598',
      reviewerName: 'Nadine Gleason III',
      reviewTime: 'Thu, Apr 30 2020 15:50:29 GMT',
      reviewSummary: 'Voluptatum non illum.',
      fullReview:
        'Molestias quia id nam esse aut qui. Ipsam qui suscipit accusamus sapiente consequuntur. Autem laborum laboriosam mollitia et quo non cumque fugit sit. Quis eum aut reiciendis quaerat.',
      helpful: 2,
      reviewVote: 4,
      productID: '5ff8ba0e73f4d752445318de',
    },

    {
      id: 7,
      reviewerID: 'v9ib_7623_5897',
      reviewerName: 'Ginger Jones',
      reviewTime: 'Tue, Jun 02 2020 09:07:09 GMT',
      reviewSummary: 'Vel necessitatibus suscipit.',
      fullReview:
        'Qui ea odit qui quae et. Veniam debitis sunt quibusdam dolor neque mollitia. Voluptatum excepturi facilis fugit. Minima eius veniam aut laboriosam est beatae minima quia quia. Pariatur sunt quis voluptatem rerum.',
      helpful: 4,
      reviewVote: 1,
      productID: '5ff8ba0e73f4d752445318de',
    },
  ];

  getAllReviews(): Review[] {
    return this.reviews.slice();
  }

  getReviewsByProductId(id: string): Review[] {
    return this.reviews.filter((r) => r.productID === id);
  }

  addReview(review: Review) {
    const newReview: Review = {
      // id: review.id,
      reviewerID: review.reviewerID,
      reviewerName: review.reviewerName,
      reviewTime: review.reviewTime,
      reviewSummary: review.reviewSummary,
      fullReview: review.fullReview,
      helpful: review.helpful,
      reviewVote: review.reviewVote,
      productID: review.productID,
    };
    this.reviews.push(newReview);
  }

  updateReview(review: Review) {
    const index = this.reviews.findIndex((r) => r.id === review.id);

    this.reviews[index] = {
      reviewSummary: review.reviewSummary,
      fullReview: review.fullReview,
      helpful: review.helpful,
      reviewVote: review.reviewVote,
    };
  }

  deleteReview(id: number) {
    const index = this.reviews.findIndex((r) => r.id === id);
    this.reviews.splice(index, 1);
  }
}
