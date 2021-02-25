import { Injectable, OnInit } from '@angular/core';
import { Advertisement } from '../_model/advertisements';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdvertisementsService {
    // advertisements: Advertisement[] = [
    //     {
    //         _id: '5ff77bf22ee5cc15bcc44ebc',
    //         companyName: 'rowland Group',
    //         AdTitle: 'Self-enabling asynchronous capability',
    //         AdDescription: 'Self-enabling asynchronous capability decription...',
    //         date: {
    //             publishedDate: 'Wed Feb 26 2020 22:55:40',
    //             expirationDate: 'Fri Aug 19 2022 17:07:33'
    //         },
    //         websiteUrl: 'https://rowland.info',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/160/661/non_2x/vector-referrals-business-location-icons.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ebd',
    //         companyName: 'adalberto LLC',
    //         AdTitle: 'Networked disintermediate ability',
    //         AdDescription: 'Networked disintermediate ability decription...',
    //         date: {
    //             publishedDate: 'Sat Apr 27 2019 08:17:18',
    //             expirationDate: 'Sun Jun 05 2022 22:54:56'
    //         },
    //         websiteUrl: 'https://adalberto.info',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/132/054/non_2x/online-store-vector-icons.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ebe',
    //         companyName: 'heather Inc',
    //         AdTitle: 'Cloned empowering hierarchy',
    //         AdDescription: 'Cloned empowering hierarchy decription...',
    //         date: {
    //             publishedDate: 'Sun Dec 29 2019 02:35:14',
    //             expirationDate: 'Thu Aug 19 2021 14:06:36'
    //         },
    //         websiteUrl: 'https://heather.com',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/428/193/non_2x/information-security-infographic-vector.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ebf',
    //         companyName: 'abigayle Group',
    //         AdTitle: 'Operative empowering interface',
    //         AdDescription: 'Operative empowering interface decription...',
    //         date: {
    //             publishedDate: 'Mon Sep 02 2019 02:16:14',
    //             expirationDate: 'Sun Jan 17 2021 01:30:42'
    //         },
    //         websiteUrl: 'http://abigayle.com',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/118/249/non_2x/business-icons-vector.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec0',
    //         companyName: 'preston and Sons',
    //         AdTitle: 'Profit-focused disintermediate moderator',
    //         AdDescription: 'Profit-focused disintermediate moderator decription...',
    //         date: {
    //             publishedDate: 'Fri Feb 23 2018 17:23:11',
    //             expirationDate: 'Tue Oct 25 2022 09:46:31'
    //         },
    //         websiteUrl: 'https://preston.biz',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/133/527/non_2x/vector-free-business-icons.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec1',
    //         companyName: 'cayla Group',
    //         AdTitle: 'Function-based asymmetric conglomeration',
    //         AdDescription: 'Function-based asymmetric conglomeration decription...',
    //         date: {
    //             publishedDate: 'Sat Aug 31 2019 05:52:28',
    //             expirationDate: 'Sun Dec 05 2021 15:27:52'
    //         },
    //         websiteUrl: 'http://cayla.org',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/154/406/non_2x/business-woman-presentation-vector.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec2',
    //         companyName: 'rodolfo Inc',
    //         AdTitle: 'Sharable impactful migration',
    //         AdDescription: 'Sharable impactful migration decription...',
    //         date: {
    //             publishedDate: 'Mon May 07 2018 13:42:43',
    //             expirationDate: 'Sat Apr 10 2021 10:12:21'
    //         },
    //         websiteUrl: 'https://rodolfo.net',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/363/272/non_2x/vector-multilevel-marketing-mlm.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec3',
    //         companyName: 'gregoria LLC',
    //         AdTitle: 'Multi-tiered contextually-based hub',
    //         AdDescription: 'Multi-tiered contextually-based hub decription...',
    //         date: {
    //             publishedDate: 'Sat Feb 29 2020 18:18:44',
    //             expirationDate: 'Thu May 19 2022 21:25:29'
    //         },
    //         websiteUrl: 'https://gregoria.name',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/114/531/non_2x/vector-table-for-coworkers.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec4',
    //         companyName: 'janice Group',
    //         AdTitle: 'Triple-buffered 24/7 moratorium',
    //         AdDescription: 'Triple-buffered 24/7 moratorium decription...',
    //         date: {
    //             publishedDate: 'Mon Jan 21 2019 21:53:29',
    //             expirationDate: 'Thu Nov 24 2022 15:01:44'
    //         },
    //         websiteUrl: 'https://janice.biz',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/115/330/non_2x/free-time-vector-1.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec5',
    //         companyName: 'mitchell and Sons',
    //         AdTitle: 'Synergized client-server website',
    //         AdDescription: 'Synergized client-server website decription...',
    //         date: {
    //             publishedDate: 'Wed May 01 2019 11:55:03',
    //             expirationDate: 'Thu Jan 21 2021 01:25:56'
    //         },
    //         websiteUrl: 'https://mitchell.org',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/205/931/non_2x/cloud-engineers-for-data-saving-phone-gadget-vector-illustration.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec6',
    //         companyName: 'margot Inc',
    //         AdTitle: 'Streamlined even-keeled synergy',
    //         AdDescription: 'Streamlined even-keeled synergy decription...',
    //         date: {
    //             publishedDate: 'Sat Feb 29 2020 20:43:51',
    //             expirationDate: 'Fri Dec 16 2022 19:13:32'
    //         },
    //         websiteUrl: 'https://margot.net',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/141/081/non_2x/free-digital-marketing-business-vector-illustration.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec7',
    //         companyName: 'janae LLC',
    //         AdTitle: 'Polarised background ability',
    //         AdDescription: 'Polarised background ability decription...',
    //         date: {
    //             publishedDate: 'Thu Jan 23 2020 18:30:35',
    //             expirationDate: 'Mon May 16 2022 21:02:49'
    //         },
    //         websiteUrl: 'http://janae.biz',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/138/073/non_2x/working-together-vector.jpg'
    //     }, {
    //         _id: '5ff77bf22ee5cc15bcc44ec8',
    //         companyName: 'nyah Group',
    //         AdTitle: 'Optional executive frame',
    //         AdDescription: 'Optional executive frame decription...',
    //         date: {
    //             publishedDate: 'Tue Oct 09 2018 16:07:29',
    //             expirationDate: 'Sat Dec 24 2022 17:37:45'
    //         },
    //         websiteUrl: 'http://nyah.name',
    //         img: 'https://static.vecteezy.com/system/resources/previews/000/669/904/non_2x/business-leadership-icon-set-vector.jpg'
    //     }
    // ];
    advertisements;


    baseUrl = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) { }




    getAllAds() {

        // return this.advertisements.slice();
        return this.httpClient.get(`${this.baseUrl}api/advertisements`);

    }
    getAdById(id) {

        // return this.advertisements.find(p => p._id === id);
        return this.httpClient.get(`${this.baseUrl}api/advertisement/${id}`);

    }

    addAd(advertisement: Advertisement) {

        const newAd: Advertisement = {
            // _id: advertisement._id,
            companyName: advertisement.companyName,
            AdTitle: advertisement.AdTitle,
            AdDescription: advertisement.AdDescription,
            date: advertisement.date,
            websiteUrl: advertisement.websiteUrl,
            img: advertisement.img,

        };
        // this.advertisements.push(newAd);
        // console.log(this.advertisements);
        this.httpClient.post(`${this.baseUrl}api/advertisement`, newAd);

    }

    updateAd(advertisement: Advertisement): void {
        // const index = this.advertisements.findIndex((p) => p._id === advertisement._id);
        // this.advertisements[index] = {
        //     _id: advertisement._id,
        //     companyName: advertisement.companyName,
        //     AdTitle: advertisement.AdTitle,
        //     AdDescription: advertisement.AdDescription,
        //     date: advertisement.date,
        //     websiteUrl: advertisement.websiteUrl,
        //     img: advertisement.img,
        // };
        const updatedAd: Advertisement = {
            _id: advertisement._id,
            companyName: advertisement.companyName,
            AdTitle: advertisement.AdTitle,
            AdDescription: advertisement.AdDescription,
            date: advertisement.date,
            websiteUrl: advertisement.websiteUrl,
            img: advertisement.img,

        };

        this.httpClient.post(`${this.baseUrl}api/advertisement`, updatedAd);
    }

    deleteAd(id: string) {
        // const index = this.advertisements.findIndex((p) => p._id === id);
        // this.advertisements.splice(index, 1);

        const idToBeDeleted = id;


        this.httpClient.delete(`${this.baseUrl}api/advertisement/${idToBeDeleted}`);
    }



    SearchById(res, searchQuery: string) {
        const advID = searchQuery.toLowerCase();
        this.advertisements = res;
        return this.advertisements.filter(a => a._id.toLowerCase().includes(advID));

    }

    SearchByName(res, searchQuery: string) {
        const companyNAME = searchQuery.toLowerCase();
        this.advertisements = res;
        return this.advertisements.filter(a => a.companyName.toLowerCase().includes(companyNAME));

    }

    SearchByTitle(res, searchQuery: string) {
        const advTitle = searchQuery.toLowerCase();
        this.advertisements = res;
        return this.advertisements.filter(a => a.AdTitle.toLowerCase().includes(advTitle));

    }

    SearchByDate(res, searchQuery: string) {
        const advDate = searchQuery.toLowerCase();
        this.advertisements = res;
        return this.advertisements.filter(a => a.date.publishedDate.toLowerCase().includes(advDate));

    }


}
