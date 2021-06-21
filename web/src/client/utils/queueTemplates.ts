const queueTemplates = [
  {
    name: 'NLP News Article Annotation',
    summary:
      'Create a job that annotates news article excerpts, formulates alternative questions and highlights specific areas of the text.',
    thumbnail: 'News%20NLP.png',
    id: 274,
    data: [
      {
        id: 'article',
        _id: '68cb37e2-ecb6-410a-ad5f-9c54680a3592',
        name: 'Article',
        type: 'named_entity_recognition',
        layout: {
          h: 15,
          i: '68cb37e2-ecb6-410a-ad5f-9c54680a3592',
          w: 10,
          x: 0,
          y: 0,
          minH: 10,
          minW: 10,
          moved: false,
          static: false
        },
        named_entity_recognition: {
          options: [
            {
              id: 'question',
              name: 'Question'
            },
            {
              id: 'answer',
              name: 'Answer'
            }
          ],
          entities: [],
          placeholder:
            'So how effective is a single dose of each of the Covid-19 vaccines?\n\nAccording to Pfizer data published in December 2020, the Pfizer-BioNTech vaccine is roughly 52% effective after the first dose. Out of 36,523 participants in the phase three trial \u2013 the final stage of testing where people either received two full doses, 21 days apart, or a placebo \u2013 who had no evidence of existing infection, 82 people in the placebo group and 39 in the vaccine group developed Covid-19 symptoms.',
          use_placeholder: true
        }
      },
      {
        id: 'reformulated_question',
        _id: '8b610328-c0df-4b4f-ae43-40bd7d8ecbb9',
        name: 'Re-formulate the selected question',
        text: {
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 3,
          i: '8b610328-c0df-4b4f-ae43-40bd7d8ecbb9',
          w: 10,
          x: 10,
          y: 2,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'reformulated_answer',
        _id: '119cb5dd-f19c-4ad4-a4ae-c3262debb0d9',
        name: 'Re-formulate the selected answer',
        text: {
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 3,
          i: '119cb5dd-f19c-4ad4-a4ae-c3262debb0d9',
          w: 10,
          x: 10,
          y: 5,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'source',
        _id: 'cd7d9b67-b8d4-490b-a608-49aac5bba04a',
        link: {
          read_only: true,
          placeholder:
            'https://www.bbc.com/future/article/20210114-covid-19-how-effective-is-a-single-vaccine-dose',
          use_placeholder: true
        },
        name: 'Source',
        type: 'link',
        layout: {
          h: 2,
          i: 'cd7d9b67-b8d4-490b-a608-49aac5bba04a',
          w: 10,
          x: 10,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'were_the_pre-selected_entities',
        _id: 'e2fa0d47-80de-4961-9607-72995fa3554f',
        name: 'Were the pre-selected entities in the text accurate?',
        type: 'single_selection',
        layout: {
          h: 4,
          i: 'e2fa0d47-80de-4961-9607-72995fa3554f',
          w: 10,
          x: 10,
          y: 8,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'yes',
              name: 'Yes'
            },
            {
              id: 'not_sure',
              name: 'Not sure'
            },
            {
              id: 'no',
              name: 'No'
            }
          ]
        }
      }
    ]
  },
  {
    name: 'SEC Filing Data Extraction',
    summary:
      'Create a tool to simplify the process of extracting key information from Financial PDF documents.',
    thumbnail: 'Data%20extraction.png',
    id: 275,
    data: [
      {
        id: 'sec_filing',
        _id: 'efdee42a-bc91-4833-99f8-a78c50a515dd',
        pdf: {
          placeholder:
            'https://s2.q4cdn.com/470004039/files/doc_financials/2020/ar/_10-K-2020-(As-Filed).pdf',
          use_placeholder: true
        },
        name: 'SEC Filing',
        type: 'pdf',
        layout: {
          h: 15,
          i: 'efdee42a-bc91-4833-99f8-a78c50a515dd',
          w: 11,
          x: 0,
          y: 0,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'company_name',
        _id: '481633d3-70ae-4afd-9d61-481a0f10dc9f',
        name: 'Company Name',
        text: {
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: '481633d3-70ae-4afd-9d61-481a0f10dc9f',
          w: 9,
          x: 11,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'month',
        _id: '9831ea74-f454-49a8-b5ae-dbee39eff589',
        name: 'Month',
        type: 'number',
        layout: {
          h: 2,
          i: '9831ea74-f454-49a8-b5ae-dbee39eff589',
          w: 4,
          x: 11,
          y: 2,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        },
        number: {
          value: null,
          use_placeholder: false
        }
      },
      {
        id: 'year',
        _id: '5748bc71-7ce0-41e1-ab57-d9402f19b7f8',
        name: 'Year',
        type: 'number',
        layout: {
          h: 2,
          i: '5748bc71-7ce0-41e1-ab57-d9402f19b7f8',
          w: 5,
          x: 15,
          y: 2,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        },
        number: {
          value: null,
          use_placeholder: false
        }
      },
      {
        id: 'document_specific_questions',
        _id: 'f1541f29-f931-4e0f-bdf4-4aa8219996d4',
        name: 'Document specific questions',
        type: 'form_sequence',
        layout: {
          h: 10,
          i: 'f1541f29-f931-4e0f-bdf4-4aa8219996d4',
          w: 9,
          x: 11,
          y: 4,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        form_sequence: {
          data: [
            {
              id: 'sec_filing_type',
              name: 'SEC Filing type',
              type: 'single_selection',
              single_selection: {
                value: null,
                options: [
                  {
                    id: '10-k',
                    name: '10-K'
                  },
                  {
                    id: '10-q',
                    name: '10-Q'
                  },
                  {
                    id: '8-k',
                    name: '8-K'
                  },
                  {
                    id: 's-1',
                    name: 'S-1'
                  },
                  {
                    id: 's-4',
                    name: 'S-4'
                  },
                  {
                    id: '11-k',
                    name: '11-K'
                  },
                  {
                    id: 'other',
                    name: 'Other'
                  }
                ]
              }
            },
            {
              id: 'other_comments',
              name: 'Other comments',
              text: {
                value: null
              },
              type: 'text'
            }
          ],
          history: [],
          is_required: true
        }
      }
    ]
  },
  {
    name: 'Personalized Customer Onboarding',
    summary:
      'Define a process that allows your Customer Operations team to welcome new customers in a personal way.',
    thumbnail: 'Customer%20Onboarding.png',
    id: 276,
    data: [
      {
        id: 'subject',
        _id: '205c65bb-1e62-485d-a5a5-e48beb6ec030',
        name: 'Email Subject',
        text: {
          placeholder: 'Welcome!',
          use_placeholder: true
        },
        type: 'text',
        layout: {
          h: 2,
          i: '205c65bb-1e62-485d-a5a5-e48beb6ec030',
          w: 13,
          x: 7,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'email_body',
        _id: '9dac9642-46ee-4377-ae58-949c28364844',
        name: 'Email Body',
        type: 'rich_text',
        layout: {
          h: 11,
          i: '9dac9642-46ee-4377-ae58-949c28364844',
          w: 13,
          x: 7,
          y: 2,
          minH: 4,
          minW: 5,
          moved: false,
          static: false
        },
        rich_text: {
          format: 'html',
          placeholder: '[Here you should write a personalized welcome message]',
          use_placeholder: false
        }
      },
      {
        id: 'email_address',
        _id: 'a7a99959-b3f3-4b1a-9bd5-97d2ae1cc471',
        name: 'Email Address',
        type: 'email',
        email: {
          read_only: true,
          placeholder: 'john@acme.com',
          use_placeholder: true
        },
        layout: {
          h: 2,
          i: 'a7a99959-b3f3-4b1a-9bd5-97d2ae1cc471',
          w: 6,
          x: 0,
          y: 2,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'full_name',
        _id: '16017b9c-c81f-48b9-b3a8-8aec5f5cf007',
        name: 'Full Name',
        text: {
          read_only: true,
          placeholder: 'John Appleseed',
          use_placeholder: true
        },
        type: 'text',
        layout: {
          h: 2,
          i: '16017b9c-c81f-48b9-b3a8-8aec5f5cf007',
          w: 6,
          x: 0,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'company_size',
        _id: 'd861e1d1-700a-4a7a-adba-f973a0a6d86c',
        name: 'Company size',
        type: 'number',
        layout: {
          h: 2,
          i: 'd861e1d1-700a-4a7a-adba-f973a0a6d86c',
          w: 6,
          x: 0,
          y: 6,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        },
        number: {
          value: null,
          read_only: true,
          placeholder: '1000',
          use_placeholder: true
        }
      },
      {
        id: 'company_website',
        _id: '39509249-86d7-41c8-9c53-9401b511f1a6',
        link: {
          read_only: true,
          placeholder: 'https://www.acme.com',
          use_placeholder: true
        },
        name: 'Company Website',
        type: 'link',
        layout: {
          h: 2,
          i: '39509249-86d7-41c8-9c53-9401b511f1a6',
          w: 6,
          x: 0,
          y: 4,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'signup_reason',
        _id: '9f2e5fb7-b511-42d2-b035-bf2c3cf34de6',
        name: 'Why did you sign up?',
        text: {
          read_only: true,
          placeholder: 'We need a new Sales budgeting tool for our org.',
          use_placeholder: true
        },
        type: 'text',
        layout: {
          h: 3,
          i: '9f2e5fb7-b511-42d2-b035-bf2c3cf34de6',
          w: 6,
          x: 0,
          y: 8,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Marketplace Listings Moderation',
    summary:
      'Create a review queue to moderate user reported, or detected, potentially violating listings.',
    thumbnail: 'Marketplace.png',
    id: 279,
    data: [
      {
        id: 'item_image',
        _id: '9302bc0d-2554-4389-a986-d7dc9329ceae',
        name: 'Item image',
        type: 'image',
        image: {
          placeholder: 'https://rainbowmedshop.com/wp-content/uploads/2020/10/adder.jpg',
          use_placeholder: false
        },
        layout: {
          h: 8,
          i: '9302bc0d-2554-4389-a986-d7dc9329ceae',
          w: 7,
          x: 0,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'title',
        _id: '3609f4dc-91e4-43d3-9e37-dd849d7db717',
        name: 'Title',
        text: {
          read_only: true,
          placeholder: 'ADDERALL 30MG CAPSULES',
          use_placeholder: true
        },
        type: 'text',
        layout: {
          h: 2,
          i: '3609f4dc-91e4-43d3-9e37-dd849d7db717',
          w: 14,
          x: 0,
          y: 8,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'description',
        _id: '6cbfc6c1-8168-44de-9d23-47e68ded6095',
        name: 'Description',
        type: 'rich_text',
        layout: {
          h: 11,
          i: '6cbfc6c1-8168-44de-9d23-47e68ded6095',
          w: 14,
          x: 0,
          y: 10,
          minH: 4,
          minW: 5,
          moved: false,
          static: false
        },
        rich_text: {
          format: 'html',
          read_only: true,
          placeholder: 'This is a sample description about the item in this workflow',
          use_placeholder: false
        }
      },
      {
        id: 'item_link',
        _id: 'fc7af7b2-76fb-4a3b-8b35-d20d8f57231b',
        link: {
          read_only: true,
          placeholder: 'https://acmemarketplace.com/item/2345',
          use_placeholder: false
        },
        name: 'Item Link',
        type: 'link',
        layout: {
          h: 2,
          i: 'fc7af7b2-76fb-4a3b-8b35-d20d8f57231b',
          w: 7,
          x: 7,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'user_link',
        _id: 'b59ff146-f8e1-4efe-b570-57f421dc9912',
        link: {
          read_only: true,
          placeholder: 'https://acmemarketplace.com/user/pro_pharmacy',
          use_placeholder: false
        },
        name: 'User Link',
        type: 'link',
        layout: {
          h: 2,
          i: 'b59ff146-f8e1-4efe-b570-57f421dc9912',
          w: 7,
          x: 7,
          y: 2,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'price',
        _id: '6949c2d9-21a1-43e2-918e-6e6db997d599',
        name: 'Price',
        text: {
          read_only: true,
          placeholder: '$299.90',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: '6949c2d9-21a1-43e2-918e-6e6db997d599',
          w: 7,
          x: 7,
          y: 4,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'created_at',
        _id: '9c091972-bc49-4bd0-9309-c5b3ae801faf',
        name: 'Created At',
        text: {
          read_only: true,
          placeholder: '12 hours ago',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: '9c091972-bc49-4bd0-9309-c5b3ae801faf',
          w: 7,
          x: 7,
          y: 6,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'remove',
        _id: '78158936-69f4-4677-8746-0a9ad851f546',
        name: 'Should this item be removed?',
        type: 'binary',
        binary: {
          is_required: true
        },
        layout: {
          h: 4,
          i: '78158936-69f4-4677-8746-0a9ad851f546',
          w: 6,
          x: 14,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'select_reasons_why_it_should_b',
        _id: 'fb6dae50-3535-40bb-883d-6225c6d1b352',
        name: 'Select reasons why it should be removed',
        type: 'multiple_selection',
        layout: {
          h: 7,
          i: 'fb6dae50-3535-40bb-883d-6225c6d1b352',
          w: 6,
          x: 14,
          y: 4,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        multiple_selection: {
          options: [
            {
              id: 'illegal',
              name: 'Illegal'
            },
            {
              id: 'illicit',
              name: 'Illicit'
            },
            {
              id: 'hazardous',
              name: 'Hazardous'
            },
            {
              id: 'counterfeit',
              name: 'Counterfeit'
            },
            {
              id: 'low_quality',
              name: 'Low quality'
            }
          ]
        }
      }
    ]
  },
  {
    name: 'Computer Vision Annotation',
    summary:
      'Create a labelling UI for your Computer Vision needs, including 2D bounding box image annotation, categorization, and more.',
    thumbnail: 'CV.png',
    id: 288,
    data: [
      {
        id: 'bounding_boxes_id',
        _id: '2729f3a6-cbc2-4e1f-a8f8-cbef77474f17',
        name: 'Bounding Boxes Block Title',
        type: 'bounding_boxes',
        layout: {
          h: 11,
          i: '2729f3a6-cbc2-4e1f-a8f8-cbef77474f17',
          w: 15,
          x: 0,
          y: 0,
          minH: 4,
          minW: 5,
          moved: false,
          static: false
        },
        bounding_boxes: {
          options: [
            {
              id: 'billboard',
              name: 'Billboard'
            },
            {
              id: 'vehicle',
              name: 'Vehicle'
            }
          ],
          placeholder:
            'https://i2.wp.com/oohtoday.com/wp-content/uploads/2018/08/formetco-photo-digital-unit-in-canada.jpg?fit=1995%2C1125&ssl=1',
          use_placeholder: true
        }
      },
      {
        id: 'road_type',
        _id: '1a9c1e9e-a9e4-4e8d-a55f-31269d8f84ba',
        name: 'Type of road',
        type: 'single_selection',
        layout: {
          h: 6,
          i: '1a9c1e9e-a9e4-4e8d-a55f-31269d8f84ba',
          w: 5,
          x: 15,
          y: 5,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'street',
              name: 'Street'
            },
            {
              id: 'avenue',
              name: 'Avenue'
            },
            {
              id: 'road',
              name: 'Road'
            },
            {
              id: 'highway',
              name: 'Highway'
            }
          ]
        }
      },
      {
        id: 'is_this_a_two_way_road',
        _id: 'd343a345-424d-48ea-aa4e-656d2b36611e',
        name: 'Is this a two way road?',
        type: 'binary',
        binary: {},
        layout: {
          h: 3,
          i: 'd343a345-424d-48ea-aa4e-656d2b36611e',
          w: 5,
          x: 15,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'how_many_lanes_do_you_see',
        _id: 'ae0f7099-cb38-4b61-8bfa-8ca5a229fb18',
        name: 'How many lanes can you spot?',
        type: 'number',
        layout: {
          h: 2,
          i: 'ae0f7099-cb38-4b61-8bfa-8ca5a229fb18',
          w: 5,
          x: 15,
          y: 3,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        },
        number: {
          value: null,
          use_placeholder: false
        }
      }
    ]
  },
  {
    name: 'Social Media Posts Moderation',
    summary:
      'Make an internal post moderation tool to keep your social media application free from unwanted content.',
    thumbnail: 'Moderation.png',
    id: 272,
    data: [
      {
        id: 'profile_picture',
        _id: '961c9479-406a-44c5-b4d6-8d9918459611',
        name: 'Profile picture',
        type: 'image',
        image: {
          placeholder:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friends-joey-mejor-peor-personaje-1563950745.jpg',
          use_placeholder: false
        },
        layout: {
          h: 4,
          i: '961c9479-406a-44c5-b4d6-8d9918459611',
          w: 4,
          x: 0,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'name',
        _id: '0b4b8e59-c322-4601-ba98-50f27c66beb4',
        name: 'Name',
        text: {
          read_only: true,
          placeholder: 'Joey T.',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: '0b4b8e59-c322-4601-ba98-50f27c66beb4',
          w: 5,
          x: 0,
          y: 4,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'post_link',
        _id: '5cdc4532-dbe8-4bfa-9110-9d0da9452a4d',
        link: {
          read_only: true,
          placeholder: 'https://friendsoffriends.com/post/8263672',
          use_placeholder: false
        },
        name: 'Post link',
        type: 'link',
        layout: {
          h: 2,
          i: '5cdc4532-dbe8-4bfa-9110-9d0da9452a4d',
          w: 9,
          x: 6,
          y: 10,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'should_we_delete_this_post',
        _id: 'bc4fbf6a-0a67-49fa-afca-555632936730',
        name: 'Should we delete this post?',
        type: 'binary',
        binary: {
          is_required: true
        },
        layout: {
          h: 4,
          i: 'bc4fbf6a-0a67-49fa-afca-555632936730',
          w: 5,
          x: 15,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'post_image',
        _id: '9460320a-2b2f-459e-8a98-613c4e52cec4',
        name: 'Post image',
        type: 'image',
        image: {
          placeholder: 'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg',
          use_placeholder: false
        },
        layout: {
          h: 7,
          i: '9460320a-2b2f-459e-8a98-613c4e52cec4',
          w: 9,
          x: 6,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'text_id',
        _id: '810ca8c0-9c02-4e1b-ba4b-c37ac3bea870',
        name: 'Text Block Title',
        text: {
          read_only: true,
          placeholder: 'Pepperoni Pizza is \ud83c\udfc6 \nMy favorite!',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 3,
          i: '810ca8c0-9c02-4e1b-ba4b-c37ac3bea870',
          w: 9,
          x: 6,
          y: 7,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'email_address',
        _id: '864c06ba-bc07-42ec-b9ff-7c9ff40e38fb',
        name: 'Email address',
        type: 'email',
        email: {
          read_only: true,
          placeholder: 'joey@aol.com',
          use_placeholder: false
        },
        layout: {
          h: 2,
          i: '864c06ba-bc07-42ec-b9ff-7c9ff40e38fb',
          w: 5,
          x: 0,
          y: 6,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'previous_violations_by_user',
        _id: 'a1ed9529-536d-47c9-b590-dc09eb85f607',
        name: 'Previous violations by user',
        type: 'number',
        layout: {
          h: 2,
          i: 'a1ed9529-536d-47c9-b590-dc09eb85f607',
          w: 5,
          x: 0,
          y: 10,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        },
        number: {
          value: null,
          read_only: true,
          placeholder: '0',
          use_placeholder: false
        }
      },
      {
        id: 'user_url',
        _id: '2852f52e-4214-4a11-a2ed-ddd846a02898',
        link: {
          read_only: true,
          placeholder: 'https://friendsoffriends.com/user/201',
          use_placeholder: false
        },
        name: 'User URL',
        type: 'link',
        layout: {
          h: 2,
          i: '2852f52e-4214-4a11-a2ed-ddd846a02898',
          w: 5,
          x: 0,
          y: 8,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'reason',
        _id: 'd682ac22-a49d-4cc1-9b83-5d0627f49d9d',
        name: "If we should delete, what's the most accurate reason?",
        type: 'single_selection',
        layout: {
          h: 6,
          i: 'd682ac22-a49d-4cc1-9b83-5d0627f49d9d',
          w: 5,
          x: 15,
          y: 4,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'nudity',
              name: 'Nudity'
            },
            {
              id: 'spam',
              name: 'Spam'
            },
            {
              id: 'scam',
              name: 'Scam'
            },
            {
              id: 'illegal_content_drugs__terror',
              name: 'Illegal content (drugs, terrorism, etc.)'
            }
          ]
        }
      },
      {
        id: 'most_common_violation',
        _id: 'd893f8ce-2029-4678-9b97-c41aef016bf6',
        name: 'Most common violation',
        text: {
          read_only: true,
          placeholder: '-',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'd893f8ce-2029-4678-9b97-c41aef016bf6',
          w: 5,
          x: 0,
          y: 12,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Support Requests Triage',
    summary:
      'Build a Customer Service ticket triaging queue to allocate, prioritize and clarify incoming user requests.',
    thumbnail: 'Triage.png',
    id: 278,
    data: [
      {
        id: 'message',
        _id: '258b24ed-8a53-4092-904c-8cb06b28d0a4',
        name: 'Message',
        text: {
          read_only: true,
          placeholder:
            "Hey, I have an issue with my account, can you reset my password?\n\nI really don't know how to get my account back otherwise...",
          use_placeholder: true
        },
        type: 'text',
        layout: {
          h: 14,
          i: '258b24ed-8a53-4092-904c-8cb06b28d0a4',
          w: 10,
          x: 0,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'route_message_to',
        _id: '4eee1055-016e-4a2a-a2d8-cb7ee53326fa',
        name: 'Route message to...',
        type: 'single_selection',
        layout: {
          h: 6,
          i: '4eee1055-016e-4a2a-a2d8-cb7ee53326fa',
          w: 5,
          x: 10,
          y: 0,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'drop',
              name: 'Drop'
            },
            {
              id: 'first_line',
              name: 'First line (BPO)'
            },
            {
              id: 'second_line',
              name: 'Second line (in-house customer service)'
            },
            {
              id: 'third_line',
              name: 'Third line (support engineer)'
            }
          ],
          is_required: true
        }
      },
      {
        id: 'priority',
        _id: 'a674d29f-d610-4e77-84e7-bcb94b322716',
        name: 'Priority',
        type: 'single_selection',
        layout: {
          h: 6,
          i: 'a674d29f-d610-4e77-84e7-bcb94b322716',
          w: 5,
          x: 15,
          y: 0,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'low',
              name: 'Low'
            },
            {
              id: 'mid',
              name: 'Mid'
            },
            {
              id: 'high',
              name: 'High'
            }
          ],
          is_required: true
        }
      },
      {
        id: 'internal_notes',
        _id: 'd94634f3-7d83-49c0-bfc9-8a618559f5d2',
        name: 'Internal Notes',
        text: {
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 6,
          i: 'd94634f3-7d83-49c0-bfc9-8a618559f5d2',
          w: 10,
          x: 10,
          y: 6,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Text Annotation',
    summary:
      'Create a custom dataset annotation tool for NER tagging, sentiment analysis and a text box to capture qualitative feedback.',
    thumbnail: 'NLP.png',
    id: 268,
    data: [
      {
        id: 'excerpt',
        _id: '3a9007e9-2923-4edb-8460-da17d920ce84',
        name: 'Excerpt - Select all relevant entities',
        type: 'named_entity_recognition',
        layout: {
          h: 14,
          i: '3a9007e9-2923-4edb-8460-da17d920ce84',
          w: 14,
          x: 0,
          y: 0,
          minH: 10,
          minW: 10,
          moved: false,
          static: false
        },
        named_entity_recognition: {
          options: [
            {
              id: 'location',
              name: 'Location'
            },
            {
              id: 'animals',
              name: 'Animals'
            },
            {
              id: 'subject',
              name: 'Subject'
            }
          ],
          entities: [],
          placeholder:
            'The day Sudan died, everything felt both monumental and ordinary. It was a Monday. Gray sky, light rain. On the horizon, the sun was struggling to make itself seen over the sharp double peaks of Mount Kenya. Little black-faced monkeys came skittering in over the fence to try to steal the morning carrots. Metal gates creaked and clanked. Men spoke in quiet Swahili. Sudan lay still in the dirt, thick legs folded under him, huge head tilted like a capsizing ship. His big front horn was blunt, scarred, worn. His breathing was harsh and ragged. All around him, for miles in every direction, the savannah teemed with life: warthogs, zebras, elephants, giraffes, leopards, lions, baboons \u2014 creatures doing what they had been doing for eons, hunting and feeding and scavenging, breathing and going and being. Until recently, Sudan had been a part of this pulse. But now he could hardly move. He was a giant stillness at the center of all the motion.\n\n\nSudan was the last male northern white rhinoceros on earth \u2014 the end of an evolutionary rope that stretched back millions of years. Although his death was a disaster, it was not a surprise. It was the grim climax of a conservation crisis that had been accelerating, for many decades, toward precisely this moment. Every desperate measure \u2014 legal, political, scientific \u2014 had already been exhausted.',
          use_placeholder: true
        }
      },
      {
        id: 'additional_notes',
        _id: '2381206a-6f46-466c-af6b-5e4259588f34',
        name: 'Additional Notes',
        text: {
          placeholder: ''
        },
        type: 'text',
        layout: {
          h: 7,
          i: '2381206a-6f46-466c-af6b-5e4259588f34',
          w: 6,
          x: 14,
          y: 4,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'what_is_the_sentiment_of_this_',
        _id: '1640ea84-5c9f-422c-b7ae-d70204df34d6',
        name: 'What is the sentiment of this text?',
        type: 'single_selection',
        layout: {
          h: 4,
          i: '1640ea84-5c9f-422c-b7ae-d70204df34d6',
          w: 6,
          x: 14,
          y: 0,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'positive',
              name: 'Positive'
            },
            {
              id: 'neutral',
              name: 'Neutral'
            },
            {
              id: 'negative',
              name: 'Negative'
            }
          ]
        }
      }
    ]
  },
  {
    name: 'Identity Verification',
    summary:
      'Define a structured process to review and approve submitted user identity data for KYC purposes.',
    thumbnail: 'Identity.png',
    id: 273,
    data: [
      {
        id: 'passport',
        _id: '831129e2-e50c-4cac-bc14-3b69e17a2358',
        name: 'Passport',
        type: 'image',
        image: {
          placeholder: 'https://sidewiserain.files.wordpress.com/2014/11/barbara-passport.jpg',
          use_placeholder: false
        },
        layout: {
          h: 13,
          i: '831129e2-e50c-4cac-bc14-3b69e17a2358',
          w: 9,
          x: 0,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'face_shot',
        _id: '540fcea9-177e-40c2-b24e-52e472efa561',
        name: 'Face shot',
        type: 'image',
        image: {
          placeholder: 'https://miro.medium.com/max/1920/1*5E3iqWCNPA4bXKQMnVGfUg.jpeg',
          use_placeholder: false
        },
        layout: {
          h: 7,
          i: '540fcea9-177e-40c2-b24e-52e472efa561',
          w: 6,
          x: 9,
          y: 6,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'first_name',
        _id: '239fa616-258e-40eb-b6f5-dd865edf2d16',
        name: 'First Name',
        text: {
          read_only: true,
          placeholder: 'Barbara',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: '239fa616-258e-40eb-b6f5-dd865edf2d16',
          w: 6,
          x: 9,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'last_name',
        _id: '63a263c5-f185-457b-a07a-6f8d6a3a44d6',
        name: 'Last Name',
        text: {
          read_only: true,
          placeholder: 'Le Bacquer',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: '63a263c5-f185-457b-a07a-6f8d6a3a44d6',
          w: 6,
          x: 9,
          y: 2,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'date_of_birth',
        _id: '85ce676f-bb7d-41a0-bfb1-fa6a3d74c435',
        name: 'Date of Birth',
        text: {
          read_only: true,
          placeholder: '02/03/1989',
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 2,
          i: '85ce676f-bb7d-41a0-bfb1-fa6a3d74c435',
          w: 6,
          x: 9,
          y: 4,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'approve',
        _id: '80ebabd2-f12d-4505-9c71-c9c183433cd1',
        name: 'Approve?',
        type: 'binary',
        binary: {
          is_required: true
        },
        layout: {
          h: 3,
          i: '80ebabd2-f12d-4505-9c71-c9c183433cd1',
          w: 5,
          x: 15,
          y: 0,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'country_of_citizenship',
        _id: 'c66fb5e1-76a4-4c65-a5a4-7b559e4fc5df',
        name: 'Country of Citizenship',
        type: 'single_selection',
        layout: {
          h: 6,
          i: 'c66fb5e1-76a4-4c65-a5a4-7b559e4fc5df',
          w: 5,
          x: 15,
          y: 3,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'us',
              name: 'US'
            },
            {
              id: 'uk',
              name: 'UK'
            },
            {
              id: 'fr',
              name: 'FR'
            },
            {
              id: 'de',
              name: 'DE'
            },
            {
              id: 'other',
              name: 'Other'
            }
          ]
        }
      },
      {
        id: 'other',
        _id: 'f69185ee-f436-4d31-b297-cb1f959078bf',
        name: 'Enter Other (optional)',
        text: {
          use_placeholder: false
        },
        type: 'text',
        layout: {
          h: 3,
          i: 'f69185ee-f436-4d31-b297-cb1f959078bf',
          w: 5,
          x: 15,
          y: 9,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Wikipedia Data Entry',
    summary: 'Make a bespoke tool optimized for your research and data entry workflows.',
    thumbnail: 'Online%20data%20entry.png',
    id: 270,
    data: [
      {
        id: 'source',
        _id: '2492a18f-4a4a-4a61-a501-e4c57dff7ddf',
        name: 'Source',
        type: 'embed',
        embed: {
          placeholder: 'https://en.wikipedia.org/wiki/Marie_Curie',
          use_placeholder: true
        },
        layout: {
          h: 15,
          i: '2492a18f-4a4a-4a61-a501-e4c57dff7ddf',
          w: 14,
          x: 0,
          y: 0,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'full_name',
        _id: 'cd0e85b4-c342-410d-a10e-1c4e969b2e86',
        name: 'Full Name',
        text: {
          placeholder: 'Marie Curie',
          use_placeholder: true
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'cd0e85b4-c342-410d-a10e-1c4e969b2e86',
          w: 6,
          x: 14,
          y: 0,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'place_of_birth',
        _id: '806e422e-38a0-46bc-ba8c-f4ad93e15376',
        name: 'Place of Birth',
        text: {
          placeholder: 'Warsaw, Poland',
          use_placeholder: true
        },
        type: 'text',
        layout: {
          h: 2,
          i: '806e422e-38a0-46bc-ba8c-f4ad93e15376',
          w: 6,
          x: 14,
          y: 2,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'nobel_winner',
        _id: '38f017dd-026b-416a-acaf-d99f90ffb906',
        name: 'Did they win a Nobel Prize?',
        type: 'binary',
        binary: {},
        layout: {
          h: 3,
          i: '38f017dd-026b-416a-acaf-d99f90ffb906',
          w: 6,
          x: 14,
          y: 11,
          minH: 3,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'summary',
        _id: '6775f9a6-01d7-4073-a5e3-82144f6fc563',
        name: 'Summarize their accomplishments',
        type: 'rich_text',
        layout: {
          h: 7,
          i: '6775f9a6-01d7-4073-a5e3-82144f6fc563',
          w: 6,
          x: 14,
          y: 4,
          minH: 4,
          minW: 5,
          moved: false,
          static: false
        },
        rich_text: {
          format: 'html',
          placeholder:
            'Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. As the first of the Curie family legacy of five Nobel Prizes, she was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields.',
          use_placeholder: true
        }
      }
    ]
  },
  {
    name: 'Named Entity Recognition Annotations',
    summary:
      'Build a custom UI with text highlighting functionality for your Named Entity Recognition jobs',
    thumbnail: 'NER.png',
    id: 268,
    data: [
      {
        id: 'excerpt',
        _id: '3a9007e9-2923-4edb-8460-da17d920ce84',
        name: 'Excerpt - Select all relevant entities',
        type: 'named_entity_recognition',
        layout: {
          h: 14,
          i: '3a9007e9-2923-4edb-8460-da17d920ce84',
          w: 14,
          x: 0,
          y: 0,
          minH: 10,
          minW: 10,
          moved: false,
          static: false
        },
        named_entity_recognition: {
          options: [
            {
              id: 'location',
              name: 'Location'
            },
            {
              id: 'animals',
              name: 'Animals'
            },
            {
              id: 'subject',
              name: 'Subject'
            }
          ],
          entities: [],
          placeholder:
            'The day Sudan died, everything felt both monumental and ordinary. It was a Monday. Gray sky, light rain. On the horizon, the sun was struggling to make itself seen over the sharp double peaks of Mount Kenya. Little black-faced monkeys came skittering in over the fence to try to steal the morning carrots. Metal gates creaked and clanked. Men spoke in quiet Swahili. Sudan lay still in the dirt, thick legs folded under him, huge head tilted like a capsizing ship. His big front horn was blunt, scarred, worn. His breathing was harsh and ragged. All around him, for miles in every direction, the savannah teemed with life: warthogs, zebras, elephants, giraffes, leopards, lions, baboons \u2014 creatures doing what they had been doing for eons, hunting and feeding and scavenging, breathing and going and being. Until recently, Sudan had been a part of this pulse. But now he could hardly move. He was a giant stillness at the center of all the motion.\n\n\nSudan was the last male northern white rhinoceros on earth \u2014 the end of an evolutionary rope that stretched back millions of years. Although his death was a disaster, it was not a surprise. It was the grim climax of a conservation crisis that had been accelerating, for many decades, toward precisely this moment. Every desperate measure \u2014 legal, political, scientific \u2014 had already been exhausted.',
          use_placeholder: true
        }
      },
      {
        id: 'additional_notes',
        _id: '2381206a-6f46-466c-af6b-5e4259588f34',
        name: 'Additional Notes',
        text: {
          placeholder: ''
        },
        type: 'text',
        layout: {
          h: 7,
          i: '2381206a-6f46-466c-af6b-5e4259588f34',
          w: 6,
          x: 14,
          y: 4,
          minH: 2,
          minW: 4,
          moved: false,
          static: false
        }
      },
      {
        id: 'what_is_the_sentiment_of_this_',
        _id: '1640ea84-5c9f-422c-b7ae-d70204df34d6',
        name: 'What is the sentiment of this text?',
        type: 'single_selection',
        layout: {
          h: 4,
          i: '1640ea84-5c9f-422c-b7ae-d70204df34d6',
          w: 6,
          x: 14,
          y: 0,
          minH: 4,
          minW: 4,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'positive',
              name: 'Positive'
            },
            {
              id: 'neutral',
              name: 'Neutral'
            },
            {
              id: 'negative',
              name: 'Negative'
            }
          ]
        }
      }
    ]
  },
  {
    name: 'Expense Approvals',
    summary:
      "Create an expense approvals management system that can be customized to your team's needs, whatever those are.",
    thumbnail: 'Expense.png',
    id: 201,
    data: [
      {
        id: 'receipt_snapshot',
        _id: '645abac2-4c9b-4f8a-bdba-3460bc84ee22',
        name: 'Receipt snapshot',
        type: 'image',
        image: {
          placeholder: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg'
        },
        layout: {
          h: 11,
          i: '645abac2-4c9b-4f8a-bdba-3460bc84ee22',
          w: 8,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'submitted_by',
        _id: '31a7a15a-76d4-40e3-8c8a-602f0d303747',
        name: 'Submitted by',
        type: 'email',
        email: {
          read_only: true,
          placeholder: 'john@example.com'
        },
        layout: {
          h: 2,
          i: '31a7a15a-76d4-40e3-8c8a-602f0d303747',
          w: 6,
          x: 8,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'approve',
        _id: '75c7280f-600f-472e-a294-f0ad4cf94d08',
        name: 'Approve?',
        type: 'binary',
        binary: {
          is_required: true
        },
        layout: {
          h: 4,
          i: '75c7280f-600f-472e-a294-f0ad4cf94d08',
          w: 6,
          x: 14,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'select_currency_if_its_not_us',
        _id: 'f8adb89e-d4f0-477a-a0a0-f46d46b916b6',
        name: "Select currency if it's not USD",
        type: 'single_selection',
        layout: {
          h: 7,
          i: 'f8adb89e-d4f0-477a-a0a0-f46d46b916b6',
          w: 6,
          x: 14,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'eur',
              name: 'EUR'
            },
            {
              id: 'chf',
              name: 'CHF'
            },
            {
              id: 'cad',
              name: 'CAD'
            },
            {
              id: 'aud',
              name: 'AUD'
            },
            {
              id: 'other_specify_below',
              name: 'Other (specify below)'
            }
          ]
        }
      },
      {
        id: 'enter_suitable_currency',
        _id: 'e10fc175-4fa6-4053-b1a5-bda91466947a',
        name: 'Enter suitable currency',
        text: {},
        type: 'text',
        layout: {
          h: 2,
          i: 'e10fc175-4fa6-4053-b1a5-bda91466947a',
          w: 6,
          x: 14,
          y: 11,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'amount_usd',
        _id: '785f4429-c5da-4c03-b985-35535b08995f',
        name: 'Amount (USD)',
        type: 'number',
        layout: {
          h: 2,
          i: '785f4429-c5da-4c03-b985-35535b08995f',
          w: 6,
          x: 8,
          y: 2,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        number: {
          read_only: false,
          is_required: true,
          placeholder: 50
        }
      },
      {
        id: 'expense_reason',
        _id: 'dd4ed9fe-919d-4100-b400-97071a989acc',
        name: 'Expense Reason',
        text: {
          read_only: true,
          placeholder: 'I took our client to the restaurant.'
        },
        type: 'text',
        layout: {
          h: 7,
          i: 'dd4ed9fe-919d-4100-b400-97071a989acc',
          w: 6,
          x: 8,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Car Damage Evaluation',
    summary:
      'Create a data labelling tool to inspect a car from all sides at once so you can generate high quality training data more efficiently.',
    thumbnail: 'Car%20inspection.png',
    id: 199,
    data: [
      {
        id: 'front',
        _id: '582dba6c-9d42-4bdd-baf1-72e114c0519e',
        name: 'Front',
        type: 'image',
        image: {
          placeholder: 'https://hlstatic.s3.eu-west-2.amazonaws.com/sample_data/car/front.png'
        },
        layout: {
          h: 6,
          i: '582dba6c-9d42-4bdd-baf1-72e114c0519e',
          w: 7,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'back',
        _id: '672d2779-02df-4a67-bcb6-7047c31a41b7',
        name: 'Back',
        type: 'image',
        image: {
          placeholder: 'https://hlstatic.s3.eu-west-2.amazonaws.com/sample_data/car/back.png'
        },
        layout: {
          h: 6,
          i: '672d2779-02df-4a67-bcb6-7047c31a41b7',
          w: 7,
          x: 7,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'right',
        _id: '4df46065-1bcd-48f0-8c2f-f50f71f13437',
        name: 'Right',
        type: 'image',
        image: {
          placeholder: 'https://hlstatic.s3.eu-west-2.amazonaws.com/sample_data/car/right.png'
        },
        layout: {
          h: 6,
          i: '4df46065-1bcd-48f0-8c2f-f50f71f13437',
          w: 7,
          x: 7,
          y: 6,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'left',
        _id: '055946f5-7fc9-4c19-bf46-e9e9620bad73',
        name: 'Left',
        type: 'image',
        image: {
          placeholder: 'https://hlstatic.s3.eu-west-2.amazonaws.com/sample_data/car/left.png'
        },
        layout: {
          h: 6,
          i: '055946f5-7fc9-4c19-bf46-e9e9620bad73',
          w: 7,
          x: 0,
          y: 6,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'where_is_this_car_damaged',
        _id: '60c57a52-35b6-4a2b-ab91-5845e05c3dff',
        name: 'Where is this car damaged?',
        type: 'multiple_selection',
        layout: {
          h: 6,
          i: '60c57a52-35b6-4a2b-ab91-5845e05c3dff',
          w: 6,
          x: 14,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        multiple_selection: {
          options: [
            {
              id: 'front',
              name: 'Front'
            },
            {
              id: 'back',
              name: 'Back'
            },
            {
              id: 'left',
              name: 'Left'
            },
            {
              id: 'right',
              name: 'Right'
            }
          ]
        }
      },
      {
        id: 'additional_notes',
        _id: '25014550-484e-444a-a304-41a51d11f0fc',
        name: 'Additional Notes',
        text: {},
        type: 'text',
        layout: {
          h: 6,
          i: '25014550-484e-444a-a304-41a51d11f0fc',
          w: 6,
          x: 14,
          y: 6,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'NLP Text Categorization',
    summary: 'Build a tool to annotate email data to train an NLP categorization model.',
    thumbnail: 'NLP%20text%20classification%20square.png',
    id: 181,
    data: [
      {
        id: 'sender_email_address',
        _id: 'efe985d8-ffac-4298-a0a5-57b4421485e4',
        name: 'Sender Email Address',
        text: {
          history: [],
          read_only: true,
          placeholder: 'sarah@apple.com.xdhan.ru'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'efe985d8-ffac-4298-a0a5-57b4421485e4',
          w: 7,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'sender_name',
        _id: '5cb65699-2a25-4ccc-90ee-f2e7dea875f6',
        name: 'Sender Name',
        text: {
          history: [],
          read_only: true,
          placeholder: 'Sarah from Apple'
        },
        type: 'text',
        layout: {
          h: 2,
          i: '5cb65699-2a25-4ccc-90ee-f2e7dea875f6',
          w: 7,
          x: 7,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'category',
        _id: '369887c0-cde1-466f-9d8f-890b645fb712',
        name: 'Select a category',
        type: 'single_selection',
        layout: {
          h: 9,
          i: '369887c0-cde1-466f-9d8f-890b645fb712',
          w: 6,
          x: 14,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        single_selection: {
          history: [],
          options: [
            {
              id: 'benign',
              name: 'Benign'
            },
            {
              id: 'benign_but_unsolicited',
              name: 'Benign but Unsolicited'
            },
            {
              id: 'spam',
              name: 'Spam'
            },
            {
              id: 'phishing',
              name: 'Phishing'
            },
            {
              id: 'scam',
              name: 'Scam'
            },
            {
              id: 'virus',
              name: 'Virus'
            },
            {
              id: 'impersonation',
              name: 'Impersonation'
            }
          ],
          is_required: true
        }
      },
      {
        id: 'email_body',
        _id: '91192e29-be52-4046-959f-4c729420740d',
        name: 'Email Body',
        text: {
          history: [],
          read_only: true,
          placeholder:
            'Hey Joe, As a token of appreciation, we are giving you the opportunity to buy 10 Macbook Pros for $5,000! Amazing right? Let me know if you would be interested in taking advantage of this one time opportunity. Best.'
        },
        type: 'text',
        layout: {
          h: 8,
          i: '91192e29-be52-4046-959f-4c729420740d',
          w: 14,
          x: 0,
          y: 5,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'subject_line',
        _id: '29e4842e-4e53-49e7-bca6-9f649d0800d2',
        name: 'Subject Line',
        text: {
          history: [],
          read_only: true,
          placeholder: "Joe, don't miss out on our latest offer!"
        },
        type: 'text',
        layout: {
          h: 3,
          i: '29e4842e-4e53-49e7-bca6-9f649d0800d2',
          w: 14,
          x: 0,
          y: 2,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Zapier Automation Manual Approvals',
    summary:
      'Create a manual approval step at the end of a Zapier automation to automate your work while staying in control.',
    thumbnail: 'Zapier%20square.png',
    id: 182,
    data: [
      {
        id: 'generated_text',
        _id: 'abbb7fce-53d4-42bc-9032-5953a245b2a0',
        name: 'Generated text (modify before submitting)',
        text: {
          history: [],
          placeholder:
            'This is a placeholder message that would contain content generated by a Zapier automation, which renders certain variables into the text. The purpose of this workflow would be to review and amend the generated message before approving it so it can get safely sent to the end receiver.'
        },
        type: 'text',
        layout: {
          h: 8,
          i: 'abbb7fce-53d4-42bc-9032-5953a245b2a0',
          w: 10,
          x: 9,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'delivery_time',
        _id: '1a310eb4-2bea-41af-a76f-ca3ac34aa335',
        name: 'Computed delivery time',
        text: {
          history: [],
          read_only: true,
          placeholder: '2 months'
        },
        type: 'text',
        layout: {
          h: 2,
          i: '1a310eb4-2bea-41af-a76f-ca3ac34aa335',
          w: 8,
          x: 1,
          y: 6,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'computed_cost',
        _id: 'f135ee67-358c-4b10-88fb-b2303731e045',
        name: 'Computed cost',
        text: {
          history: [],
          read_only: true,
          placeholder: 'NaN'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'f135ee67-358c-4b10-88fb-b2303731e045',
          w: 8,
          x: 1,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'inferred_name',
        _id: 'a5bcf012-bf58-4953-bc22-e8b259c90f85',
        name: 'Inferred name',
        text: {
          history: [],
          read_only: true,
          placeholder: 'Alice'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'a5bcf012-bf58-4953-bc22-e8b259c90f85',
          w: 8,
          x: 1,
          y: 2,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'email',
        _id: 'cd634e3b-9d0a-4a57-907e-8976f7da8e10',
        name: 'Email',
        text: {
          history: [],
          read_only: true,
          placeholder: 'alice@example.com'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'cd634e3b-9d0a-4a57-907e-8976f7da8e10',
          w: 8,
          x: 1,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Payment Refunds',
    summary: 'Build a UI to effortlessly view and process customer refund requests.',
    thumbnail: 'Refund%20square.png',
    id: 183,
    data: [
      {
        id: 'refund_cause',
        _id: 'b28495e2-12b8-4979-9983-556b5fc7cb09',
        name: 'Cause for refund',
        type: 'single_selection',
        layout: {
          h: 6,
          i: 'b28495e2-12b8-4979-9983-556b5fc7cb09',
          w: 6,
          x: 14,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        single_selection: {
          history: [],
          options: [
            {
              id: 'not_received',
              name: "Didn't receive order"
            },
            {
              id: 'returned',
              name: 'Order was returned'
            },
            {
              id: 'missed_items',
              name: 'Order missed items'
            },
            {
              id: 'other',
              name: 'Other'
            }
          ],
          is_required: true
        }
      },
      {
        id: 'approve',
        _id: '530b7b91-0c0c-4006-ba7d-116f2a1ebf31',
        name: 'Should we approve this refund?',
        type: 'binary',
        binary: {
          history: [],
          is_required: true
        },
        layout: {
          h: 4,
          i: '530b7b91-0c0c-4006-ba7d-116f2a1ebf31',
          w: 6,
          x: 8,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'additional_notes',
        _id: '1fc6318b-b1a0-464c-8fd5-63dfa04df2f4',
        name: 'Additional Notes',
        text: {
          history: [],
          placeholder: 'You may leave feedback here'
        },
        type: 'text',
        layout: {
          h: 4,
          i: '1fc6318b-b1a0-464c-8fd5-63dfa04df2f4',
          w: 6,
          x: 8,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'order_id',
        _id: 'a176a429-6849-4d42-a451-0a317157eaba',
        name: 'Order ID',
        text: {
          history: [],
          read_only: true,
          placeholder: '#1234'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'a176a429-6849-4d42-a451-0a317157eaba',
          w: 8,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'customer_complaint',
        _id: '165923bf-18ff-44d6-9889-de86b9e0e763',
        name: 'Customer complaint',
        text: {
          history: [],
          read_only: true,
          placeholder: 'I never received this...'
        },
        type: 'text',
        layout: {
          h: 6,
          i: '165923bf-18ff-44d6-9889-de86b9e0e763',
          w: 8,
          x: 0,
          y: 2,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'Quality Control of ML predictions',
    summary:
      'Create an efficient process to evaluate model predictions that will allow you to systematically spot accuracy regressions.',
    thumbnail: 'AI%20QC%20square.png',
    id: 184,
    data: [
      {
        id: 'top3_score',
        _id: '376ae85e-b059-4205-b03e-9702d6d71bcd',
        name: 'Top-3 Score',
        type: 'number',
        layout: {
          h: 2,
          i: '376ae85e-b059-4205-b03e-9702d6d71bcd',
          w: 5,
          x: 5,
          y: 12,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        number: {
          history: [],
          read_only: true,
          placeholder: 0.07
        }
      },
      {
        id: 'top2_score',
        _id: '29df9709-3a24-49f1-929e-d0a6f02b8eb8',
        name: 'Top-2 Score',
        type: 'number',
        layout: {
          h: 2,
          i: '29df9709-3a24-49f1-929e-d0a6f02b8eb8',
          w: 5,
          x: 5,
          y: 10,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        number: {
          history: [],
          read_only: true,
          placeholder: 0.15
        }
      },
      {
        id: 'top_score',
        _id: '9bb68620-cdb8-4e66-9e9c-d9718e83c60f',
        name: 'Top Score',
        type: 'number',
        layout: {
          h: 2,
          i: '9bb68620-cdb8-4e66-9e9c-d9718e83c60f',
          w: 5,
          x: 5,
          y: 8,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        number: {
          history: [],
          read_only: true,
          placeholder: 0.98
        }
      },
      {
        id: 'top3_prediction',
        _id: '905638f7-79d5-41c1-9d43-32599bf4f5b7',
        name: 'Top-3 Predicted Label',
        text: {
          history: [],
          read_only: true,
          placeholder: 'Cat'
        },
        type: 'text',
        layout: {
          h: 2,
          i: '905638f7-79d5-41c1-9d43-32599bf4f5b7',
          w: 5,
          x: 0,
          y: 12,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'top2_prediction',
        _id: 'f8a33c3e-1347-4b16-9d23-224b003d169c',
        name: 'Top-2 Predicted Label',
        text: {
          history: [],
          read_only: true,
          placeholder: 'Fox'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'f8a33c3e-1347-4b16-9d23-224b003d169c',
          w: 5,
          x: 0,
          y: 10,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'top_prediction',
        _id: 'c538e001-9fc8-45ea-9c70-e434d111676e',
        name: 'Top Predicted Label',
        text: {
          history: [],
          read_only: true,
          placeholder: 'Dog'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'c538e001-9fc8-45ea-9c70-e434d111676e',
          w: 5,
          x: 0,
          y: 8,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'input_image',
        _id: 'f758c31a-3b53-41b7-b6c5-26d5fa28e246',
        name: 'Input Image',
        type: 'image',
        image: {
          history: [],
          placeholder:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
        },
        layout: {
          h: 8,
          i: 'f758c31a-3b53-41b7-b6c5-26d5fa28e246',
          w: 10,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'qa',
        _id: '17b68e19-7692-4565-9f19-3c3d9e50e8f5',
        name: 'QA questions',
        type: 'form_sequence',
        layout: {
          h: 9,
          i: '17b68e19-7692-4565-9f19-3c3d9e50e8f5',
          w: 8,
          x: 11,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        form_sequence: {
          data: [
            {
              id: 'accurate_prediction',
              name: 'Is the predicted label accurate?',
              type: 'binary',
              binary: {
                value: null
              },
              logic_jump: {
                false: 'correct_class'
              }
            },
            {
              id: 'correct_class',
              name: "If not, what's the correct class?",
              type: 'single_selection',
              single_selection: {
                value: null,
                options: [
                  {
                    id: 'dog',
                    name: 'Dog'
                  },
                  {
                    id: 'cat',
                    name: 'Cat'
                  },
                  {
                    id: 'fox',
                    name: 'Fox'
                  },
                  {
                    id: 'hamster',
                    name: 'Hamster'
                  },
                  {
                    id: 'squirrel',
                    name: 'Squirrel'
                  },
                  {
                    id: 'other',
                    name: 'Other'
                  }
                ]
              }
            }
          ],
          history: [],
          is_required: true
        }
      }
    ]
  },
  {
    name: 'User Onboarding',
    summary:
      'Keep an organized queue of user registrations that you and your team can move through your onboarding process.',
    thumbnail: 'Onboarding%20square.png',
    id: 186,
    data: [
      {
        id: 'decision',
        _id: '572f32c3-6cea-47a4-b291-f0d7c0823b54',
        name: 'Onboarding decision',
        type: 'single_selection',
        layout: {
          h: 6,
          i: '572f32c3-6cea-47a4-b291-f0d7c0823b54',
          w: 6,
          x: 14,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        single_selection: {
          options: [
            {
              id: 'grant_access',
              name: 'Grant access'
            },
            {
              id: 'put_on_general_release_waitlis',
              name: 'Put on General Release waitlist'
            },
            {
              id: 'ignore',
              name: 'Ignore'
            }
          ],
          is_required: true
        }
      },
      {
        id: 'signup_reason',
        _id: '386427a0-e891-4967-8d6a-149d16e1113b',
        name: 'Why have you signed up?',
        text: {
          read_only: true,
          placeholder: 'Because this is great!'
        },
        type: 'text',
        layout: {
          h: 6,
          i: '386427a0-e891-4967-8d6a-149d16e1113b',
          w: 8,
          x: 6,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'access_reason',
        _id: '0d7c5376-c5ec-41ae-9319-56f3a3ce2bf7',
        name: 'Why should we give you access?',
        text: {
          read_only: true,
          placeholder: 'Please let me in'
        },
        type: 'text',
        layout: {
          h: 6,
          i: '0d7c5376-c5ec-41ae-9319-56f3a3ce2bf7',
          w: 8,
          x: 6,
          y: 6,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'email_address',
        _id: '55249d46-8a6e-4b98-b649-c20a4f556c91',
        name: 'Email address',
        text: {
          read_only: true,
          placeholder: 'alice@example.com'
        },
        type: 'text',
        layout: {
          h: 2,
          i: '55249d46-8a6e-4b98-b649-c20a4f556c91',
          w: 6,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'company_name',
        _id: '73a079db-b7d8-4006-8ee7-fd3a0c2eea2d',
        name: 'Company name',
        text: {
          read_only: true,
          placeholder: 'Example Inc'
        },
        type: 'text',
        layout: {
          h: 2,
          i: '73a079db-b7d8-4006-8ee7-fd3a0c2eea2d',
          w: 6,
          x: 0,
          y: 2,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'employee_size',
        _id: '19dcc44b-3e43-4f70-ae08-aa3b81648429',
        name: 'Employee size',
        type: 'number',
        layout: {
          h: 2,
          i: '19dcc44b-3e43-4f70-ae08-aa3b81648429',
          w: 6,
          x: 0,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        number: {
          read_only: true,
          placeholder: 1
        }
      }
    ]
  },
  {
    name: 'AML Compliance',
    summary:
      'A manual review workflow for users or transactions flagged for manual approval due to a potential AML risk.',
    thumbnail: 'AML%20square.png',
    id: 187,
    data: [
      {
        id: 'allow_transaction',
        _id: '512e7550-a3de-4b8d-8049-bc15e1452ebc',
        name: 'Allow transaction',
        type: 'binary',
        binary: {
          is_required: true
        },
        layout: {
          h: 4,
          i: '512e7550-a3de-4b8d-8049-bc15e1452ebc',
          w: 5,
          x: 15,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'transaction_date',
        _id: '5033d2bc-e099-497c-9e90-d391db01c141',
        name: 'Transaction Date',
        text: {
          read_only: true,
          placeholder: '01/01/2020'
        },
        type: 'text',
        layout: {
          h: 2,
          i: '5033d2bc-e099-497c-9e90-d391db01c141',
          w: 6,
          x: 9,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'transaction_amount',
        _id: 'eb25d9f0-65d7-450f-9655-f875565ab815',
        name: 'Transaction Amount',
        type: 'number',
        layout: {
          h: 2,
          i: 'eb25d9f0-65d7-450f-9655-f875565ab815',
          w: 6,
          x: 9,
          y: 2,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        number: {
          read_only: true,
          placeholder: 100
        }
      },
      {
        id: 'ip_location',
        _id: '5a8ea05f-29d1-4113-a996-9549cdf3570b',
        name: 'IP Location',
        text: {
          read_only: true,
          placeholder: 'London, UK'
        },
        type: 'text',
        layout: {
          h: 2,
          i: '5a8ea05f-29d1-4113-a996-9549cdf3570b',
          w: 6,
          x: 9,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'payment_method',
        _id: 'ac07a626-416e-4c96-9abc-d9dd5a959eb3',
        name: 'Payment method',
        text: {
          read_only: true,
          placeholder: 'CC - Visa'
        },
        type: 'text',
        layout: {
          h: 2,
          i: 'ac07a626-416e-4c96-9abc-d9dd5a959eb3',
          w: 6,
          x: 9,
          y: 6,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'ordered_items',
        _id: '1e552194-2ca1-4a71-8a0f-d8563fb29756',
        name: 'Ordered items',
        text: {
          read_only: true,
          placeholder: '1x laptop charger'
        },
        type: 'text',
        layout: {
          h: 8,
          i: '1e552194-2ca1-4a71-8a0f-d8563fb29756',
          w: 9,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      }
    ]
  },
  {
    name: 'User Comments Moderation',
    summary:
      'Create a review queue to moderate user comments relayed through user reports or text classifiers.',
    thumbnail: 'Moderation%20square.png',
    id: 188,
    data: [
      {
        id: 'approve',
        _id: 'adb961d5-f6c4-4090-9cb3-d74e0bedbfc2',
        name: 'Approve this comment',
        type: 'binary',
        binary: {
          is_required: true
        },
        layout: {
          h: 4,
          i: 'adb961d5-f6c4-4090-9cb3-d74e0bedbfc2',
          w: 8,
          x: 12,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'rejection_reasons',
        _id: '3226c2cb-c383-4e92-9f50-f0ff5377497d',
        name: 'Choose rejection reasons where appropriate',
        type: 'multiple_selection',
        layout: {
          h: 8,
          i: '3226c2cb-c383-4e92-9f50-f0ff5377497d',
          w: 8,
          x: 12,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        },
        multiple_selection: {
          options: [
            {
              id: 'hate_speech',
              name: 'Hate speech'
            },
            {
              id: 'spam',
              name: 'Spam'
            },
            {
              id: 'harassment',
              name: 'Harassment'
            },
            {
              id: 'scam',
              name: 'Scam'
            },
            {
              id: 'violent_language',
              name: 'Violent language'
            },
            {
              id: 'misinformation',
              name: 'Misinformation'
            }
          ]
        }
      },
      {
        id: 'comment',
        _id: '965cde20-0696-4be1-9466-4ce2e1737393',
        name: 'Comment',
        text: {
          read_only: true,
          placeholder: 'Comment placeholder'
        },
        type: 'text',
        layout: {
          h: 4,
          i: '965cde20-0696-4be1-9466-4ce2e1737393',
          w: 12,
          x: 0,
          y: 0,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'profile_picture',
        _id: 'c1f3b279-5ace-488a-bfe2-1cb679574b63',
        name: 'Profile Picture',
        type: 'image',
        image: {
          placeholder:
            'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Ceri%20Breeze,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1542744924/sprxr3zfpvpjkjmlsexa.jpg'
        },
        layout: {
          h: 6,
          i: 'c1f3b279-5ace-488a-bfe2-1cb679574b63',
          w: 6,
          x: 0,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'name',
        _id: '506fe151-f704-4af9-8e4b-eb2288d574ae',
        name: 'Name',
        text: {
          read_only: true,
          placeholder: 'Bob Harris'
        },
        type: 'text',
        layout: {
          h: 3,
          i: '506fe151-f704-4af9-8e4b-eb2288d574ae',
          w: 6,
          x: 6,
          y: 4,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      },
      {
        id: 'timestamp',
        _id: 'a73c0bdd-b537-41c8-8dcf-49738810ceec',
        name: 'Timestamp',
        text: {
          read_only: true,
          placeholder: '01/01/2020, 12:00'
        },
        type: 'text',
        layout: {
          h: 3,
          i: 'a73c0bdd-b537-41c8-8dcf-49738810ceec',
          w: 6,
          x: 6,
          y: 7,
          minH: 1,
          minW: 1,
          moved: false,
          static: false
        }
      }
    ]
  }
]

export default queueTemplates
