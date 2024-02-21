
import React, { useState } from 'react';
import Show_Api from '../Api_data_Show/Show_Api';

const Api = () => {
    // const [persons, setPersons] = useState([]);

    const persons = [
        {
          "id": "65d5b60f9b5a458566125abb",
          "index": 1,
          "guid": "01dd52fb-80ae-46e7-a000-3b3c5db36a82",
          "isActive": false,
          "balance": "$2,300.72",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "brown",
          "name": "Billie Oneil",
          "gender": "female",
          "company": "ANIMALIA",
          "email": "billieoneil@animalia.com",
          "phone": "+1 (824) 469-3413",
          "address": "877 Hopkins Street, Eggertsville, Nebraska, 3083",
          "about": "Et laboris eu nulla irure qui magna in. Do nulla consectetur duis eiusmod pariatur occaecat exercitation cupidatat exercitation minim consectetur. Sunt sint velit elit incididunt. Exercitation ad nulla ut laborum sint et amet cillum quis.\r\n"
        },
        {
          "id": "65d5b60f088fa493de4cd2ba",
          "index": 2,
          "guid": "70bcc449-5cdf-4fcf-a41c-b6c503b30d97",
          "isActive": false,
          "balance": "$1,619.64",
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "green",
          "name": "Adrian Hayes",
          "gender": "female",
          "company": "CABLAM",
          "email": "adrianhayes@cablam.com",
          "phone": "+1 (848) 480-3510",
          "address": "938 Lake Street, Foscoe, Guam, 5507",
          "about": "Ullamco aute Lorem consequat nostrud. Anim anim adipisicing veniam culpa est culpa. Minim eiusmod duis dolore consequat eu dolor tempor eu veniam et. Cupidatat consectetur consectetur est occaecat pariatur aute et aute magna. Minim occaecat enim nulla anim irure laborum qui pariatur ullamco. Amet adipisicing in aute pariatur dolore voluptate laboris laborum commodo in velit Lorem.\r\n"
        },
        {
          "id": "65d5b60f6bf07b293078f5de",
          "index": 3,
          "guid": "2e2b87e9-7d88-49ba-8f5f-a0618ce46311",
          "isActive": true,
          "balance": "$2,605.84",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "brown",
          "name": "Ortega Moss",
          "gender": "male",
          "company": "TELPOD",
          "email": "ortegamoss@telpod.com",
          "phone": "+1 (852) 573-3225",
          "address": "166 Dearborn Court, Beechmont, Missouri, 2879",
          "about": "Do enim reprehenderit deserunt magna laboris cillum duis velit consectetur aliqua adipisicing ea. Esse quis voluptate qui consectetur. Quis excepteur consectetur culpa nisi laboris sit qui irure ad. Qui in in ut duis ut velit velit reprehenderit et fugiat ad sunt amet. Officia ullamco minim laborum laborum veniam ullamco aute esse ad et laborum officia pariatur. Est enim laborum consequat nisi adipisicing sint eiusmod fugiat ut nisi. Sint adipisicing velit fugiat mollit laboris pariatur quis sint mollit fugiat.\r\n"
        }
      ]

      
      return (
          <div>
              {
              persons.map(person => <Show_Api key= {person.id} person = {person}></Show_Api>)
              }
        </div>
    );
};

export default Api
