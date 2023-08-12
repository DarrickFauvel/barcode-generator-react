import { atom } from "nanostores"

export const selectedProduceItem = atom({})

export const produceData = atom([
  {
    name: "Banana",
    upc: "208011000006",
    dpci: "267-00-8011",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Lemon",
    upc: "204053000004",
    dpci: "267-01-4053",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_3d962311-4a0b-47f9-8146-28740dfa2d53?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Lime",
    upc: "204048000002",
    dpci: "267-01-4048",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_3e3023d6-31c9-4a50-8d1e-a5a5719448ae?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Avocado",
    upc: "204046000004",
    dpci: "224-12-4770",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_6d9d5f9f-7206-49c4-a381-6ba5a0c08504?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Mini Watermelon",
    upc: "508060025990",
    dpci: "267-04-4362",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_7dfb5982-541a-4c72-b731-ccd9b061da84?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Cantaloupe",
    upc: "492670440505",
    dpci: "267-04-4050",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_ad0d9fee-f2b2-4997-b45a-c4a357deca5d?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Premium Mango",
    upc: "204584000009",
    dpci: "267-06-4051",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_c3800365-97f3-4fe9-8061-8894a378cc85?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Pineapple",
    upc: "204029000007",
    dpci: "267-06-0029",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_e16f01b2-5782-4b0a-b367-36b2e864e250?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Navel Orange",
    upc: "203107000007",
    dpci: "267-01-4012",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_b7943030-a555-4430-bdc5-832ec57dca95?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Red Grapefruit",
    upc: "204495000006",
    dpci: "267-01-4281",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_c9cc2d3f-d31a-4e81-a99c-f7521195cd86?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Honeycrisp Apple",
    upc: "205195000006",
    dpci: "266-05-4195",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_bc1ff7bf-9921-4ea6-b5cc-cf155b4062f5?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Gala Apple",
    upc: "204205000005",
    dpci: "266-05-4205",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_14ef7290-1621-47e0-8c52-1f604be1c022?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Baking Sweet Potato",
    upc: "209091000009",
    dpci: "211-17-9091",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_86ede766-96f6-4652-9d40-4b9fe2f2e577?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "English Cucumber",
    upc: "492112145937",
    dpci: "211-21-4593",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_bda300ae-5c14-43fc-9acd-c3312dbbaea4?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Russet Potato",
    upc: "492111747255",
    dpci: "211-17-4725",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_c58aff39-9071-4f1b-a270-5d00f41a0db4?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Yellow Onion",
    upc: "204666000002",
    dpci: "211-17-4666",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_c638bf19-9e72-4fec-8d82-c7104e958b79?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "White Onion",
    upc: "204660000008",
    dpci: "211-17-4660",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_5d908f32-b2f6-4bc9-9156-1c8a7c1df9c5?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Red Onion",
    upc: "492111740850",
    dpci: "211-17-4085",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_6e9b6bee-9320-4ddd-ae86-38d6c636ec63?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Peach",
    upc: "204038000005",
    dpci: "266-03-0010",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_60229733-e225-4ef7-bd7f-b9d315977744?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Seedless Watermelon",
    upc: "204032000001",
    dpci: "267-04-4032",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_bf564d29-ec9d-4657-8019-e90709bf48f7?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "Plum",
    upc: "204440000006",
    dpci: "266-03-0022",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_fdd6ed04-7eea-4172-b0e0-856a51b17e10?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
  {
    name: "White Peach",
    upc: "204400000008",
    dpci: "266-03-0012",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_fb9bf4e6-b4a8-4bdd-b835-c98753c422be?wid=325&hei=325&qlt=80&fmt=pjpeg",
  },
])
