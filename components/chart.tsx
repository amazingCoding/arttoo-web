import { formatDate } from "@/utils";
import { useEffect } from "react";

export const Chart1 = () => {
  const similarArtworks = [
    {
      "date": "1994-05-12",
      "price": 190000,
      name: `L'olivier`,
      size: `73.3 x 54.9 cm`,
      type: `Oil on canvas`,
      creatDate: `1898`,
      saleDate: `34466`,
      place: `Koller Auktionen . Zurich`,
      AuctionName: `19th & 20th Century Art`,
      lot: `Lot 1095`,
    },
    {
      "date": "1996-06-24",
      "price": 338800,
      name: `Nature morte,`,
      size: `45.72 x 55.88 cm`,
      type: `Oil on canvas`,
      creatDate: `1896`,
      saleDate: `35240`,
      place: `Sotheby's . London`,
      AuctionName: `Impressionist Art from the Gutzwiller Collection`,
      lot: `Lot 16`,
    },
    {
      "date": "1998-05-12",
      "price": 460000,
      name: `Nature morte au pichet et fruits`,
      size: `38.1 x 45.72 cm`,
      type: `Oil on canvas`,
      creatDate: `1898`,
      saleDate: `35927`,
      place: `Christie's . New York`,
      AuctionName: `20th Century Art`,
      lot: `Lot 19`,
    },
    {
      "date": "1998-07-02",
      "price": 265040,
      name: `Le bouquet de Belle-lle`,
      size: `45.72 x 38.1 cm`,
      type: `Oil on canvas`,
      creatDate: `1897`,
      saleDate: `35978`,
      place: `Christie's . London`,
      AuctionName: `20th Century Art`,
      lot: `Lot 120`,
    },
    {
      "date": "1999-12-01",
      "price": 214046,
      name: `L'olivier`,
      size: `38.1 x 45.72 cm`,
      type: `Oil on canvas`,
      creatDate: `1898`,
      saleDate: `36495`,
      place: `Koller Auktionen . Zurich`,
      AuctionName: `19th & 20th Century Art`,
      lot: `Lot 1095`,
    },
    {
      "date": "2005-05-04",
      "price": 1700000,
      name: `Pierre au cheval de bois`,
      size: `73.7x 61 cm`,
      type: `Oil on canvas`,
      creatDate: `1904`,
      saleDate: `38476`,
      place: `Christie's . New York`,
      AuctionName: `Impressionist & Modern Art`,
      lot: `Lot 11`,
    },
    {
      "date": "2007-06-18",
      "price": 2180886,
      name: `Nature morte aux oranges`,
      size: `45.7x55.9cm`,
      type: `Oil on canvas`,
      creatDate: `1898`,
      saleDate: `39251`,
      place: `Christie's . London`,
      AuctionName: `Impressionist & Modern Art`,
      lot: `Lot 17`,
    },
    //	Nu accoude,	47.6 x 40 cm	oil on canvas	1869-1954	39392	Christie's . New York, Rockefeller Center	Impressionist and Modern Art Evening Sale	Lot 90	US$1,609,000 
    {
      "date": "2007-11-06",
      "price": 1609000,
      name: `Nu accoude`,
      size: `47.6 x 40 cm`,
      type: `Oil on canvas`,
      creatDate: `1869-1954`,
      saleDate: `39392`,
      place: `Christie's . New York, Rockefeller Center`,
      AuctionName: `Impressionist and Modern Art Evening Sale`,
      lot: `Lot 90`,
    },
    //	Nu à la serviette blanche,	80.7x59.2 cm	oil on canvas	1901-1903	39939	Christie's . New York,Rockefeller Center	Impressionist and Modern Evening Sale	Lot 3	US$3,218,500 
    {
      "date": "2009-05-06",
      "price": 3218500,
      name: `Nu à la serviette blanche`,
      size: `80.7x59.2 cm`,
      type: `Oil on canvas`,
      creatDate: `1901-1903`,
      saleDate: `39939`,
      place: `Christie's . New York,Rockefeller Center`,
      AuctionName: `Impressionist and Modern Evening Sale`,
      lot: `Lot 3`,
    },
    // 	Jeune fille a la mauresque, robe verte,	66 x 55 cm	oil on canvas	1869-1954	41311	Christie's . London, King Street	Impressionist/Modern Evening Sale	Lot 10	US$4,794,051 
    {
      "date": "2013-02-06",
      "price": 4794051,
      name: `Jeune fille a la mauresque, robe verte`,
      size: `66 x 55 cm`,
      type: `Oil on canvas`,
      creatDate: `1869-1954`,
      saleDate: `41311`,
      place: `Christie's . London, King Street`,
      AuctionName: `Impressionist/Modern Evening Sale`,
      lot: `Lot 10`,
    },
    //	Paysage de Collioure,	46.1x 55.1 cm	oil on canvas	1906-1907	43228	Christie's . New York	The Collection of Peggy and David Rockefeller: 19th and 20th Century Art, Evening Sale	Lot 20	US$6,500,000 
    {
      "date": "2018-05-08",
      "price": 6500000,
      name: `Paysage de Collioure`,
      size: `46.1x 55.1 cm`,
      type: `Oil on canvas`,
      creatDate: `1906-1907`,
      saleDate: `43228`,
      place: `Christie's . New York`,
      AuctionName: `The Collection of Peggy and David Rockefeller: 19th and 20th Century Art, Evening Sale`,
      lot: `Lot 20`,
    },
    // 	Fleurs ou Fleurs devant un portrait	100.3 x 81.2 cm	oil on canvas	1923	44698	Sotheby's	Modern Evening Auction	18	US$15,261,500 
    {
      "date": "2022-05-17",
      "price": 15261500,
      name: `Fleurs ou Fleurs devant un portrait`,
      size: `100.3 x 81.2 cm`,
      type: `Oil on canvas`,
      creatDate: `1923`,
      saleDate: `44698`,
      place: `Sotheby's`,
      AuctionName: `Modern Evening Auction`,
      lot: `18`,
    },
    // 	Mademoiselle Matisse en manteau écossais	73.3 x 54.9 cm	oil on canvas	1918	45057	Christie's	20th Century Evening Sale	57 A	US$9,035,000 
    {
      "date": "2023-05-11",
      "price": 9035000,
      name: `Mademoiselle Matisse en manteau écossais`,
      size: `73.3 x 54.9 cm`,
      type: `Oil on canvas`,
      creatDate: `1918`,
      saleDate: `45057`,
      place: `Christie's`,
      AuctionName: `20th Century Evening Sale`,
      lot: `57 A`,
    }
  ]
  const predictedTrend = [
    {
      "date": "1994-05-12",
      "predicted_price": 205477.91272280196
    },
    {
      "date": "1994-06-02",
      "predicted_price": 210756.8806138559
    },
    {
      "date": "1994-06-23",
      "predicted_price": 212014.0979484754
    },
    {
      "date": "1994-07-14",
      "predicted_price": 213280.24916155756
    },
    {
      "date": "1994-08-04",
      "predicted_price": 214557.629168868
    },
    {
      "date": "1994-08-26",
      "predicted_price": 215895.1155623307
    },
    {
      "date": "1994-09-16",
      "predicted_price": 217203.76878978105
    },
    {
      "date": "1994-10-07",
      "predicted_price": 218401.4932986951
    },
    {
      "date": "1994-10-28",
      "predicted_price": 219271.03861448815
    },
    {
      "date": "1994-11-19",
      "predicted_price": 220177.58468806368
    },
    {
      "date": "1994-12-10",
      "predicted_price": 221076.36553666752
    },
    {
      "date": "1994-12-31",
      "predicted_price": 221989.9262546587
    },
    {
      "date": "1995-01-21",
      "predicted_price": 222473.92280346638
    },
    {
      "date": "1995-02-11",
      "predicted_price": 222940.88023122575
    },
    {
      "date": "1995-03-05",
      "predicted_price": 223420.9083116884
    },
    {
      "date": "1995-03-26",
      "predicted_price": 223914.04467971248
    },
    {
      "date": "1995-04-16",
      "predicted_price": 224758.36688596802
    },
    {
      "date": "1995-05-07",
      "predicted_price": 225763.74631483454
    },
    {
      "date": "1995-05-29",
      "predicted_price": 226807.81865804372
    },
    {
      "date": "1995-06-19",
      "predicted_price": 227844.4494818023
    },
    {
      "date": "1995-07-10",
      "predicted_price": 228894.67021322504
    },
    {
      "date": "1995-07-31",
      "predicted_price": 229957.6563623072
    },
    {
      "date": "1995-08-21",
      "predicted_price": 231036.64060297952
    },
    {
      "date": "1995-09-12",
      "predicted_price": 232154.9391192016
    },
    {
      "date": "1995-10-03",
      "predicted_price": 233305.10680360883
    },
    {
      "date": "1995-10-24",
      "predicted_price": 234922.7255908134
    },
    {
      "date": "1995-11-14",
      "predicted_price": 236559.55807170874
    },
    {
      "date": "1995-12-06",
      "predicted_price": 238262.71642638216
    },
    {
      "date": "1995-12-27",
      "predicted_price": 239938.73290686932
    },
    {
      "date": "1996-01-17",
      "predicted_price": 242389.9681012919
    },
    {
      "date": "1996-02-07",
      "predicted_price": 245123.6833796601
    },
    {
      "date": "1996-02-28",
      "predicted_price": 247883.86751274538
    },
    {
      "date": "1996-03-21",
      "predicted_price": 250767.17424968374
    },
    {
      "date": "1996-04-11",
      "predicted_price": 255682.1318918707
    },
    {
      "date": "1996-05-02",
      "predicted_price": 263108.45891342626
    },
    {
      "date": "1996-05-23",
      "predicted_price": 270592.5411166613
    },
    {
      "date": "1996-06-14",
      "predicted_price": 278452.4757868857
    },
    {
      "date": "1996-07-05",
      "predicted_price": 289148.73955627123
    },
    {
      "date": "1996-07-26",
      "predicted_price": 314593.4819944405
    },
    {
      "date": "1996-08-16",
      "predicted_price": 340222.6319180868
    },
    {
      "date": "1996-09-06",
      "predicted_price": 366040.50100081693
    },
    {
      "date": "1996-09-28",
      "predicted_price": 393228.7431895044
    },
    {
      "date": "1996-10-19",
      "predicted_price": 383782.1533856553
    },
    {
      "date": "1996-11-09",
      "predicted_price": 367527.74100649374
    },
    {
      "date": "1996-11-30",
      "predicted_price": 351166.7450448387
    },
    {
      "date": "1996-12-22",
      "predicted_price": 333850.03313569893
    },
    {
      "date": "1997-01-12",
      "predicted_price": 322237.1927601599
    },
    {
      "date": "1997-02-02",
      "predicted_price": 315382.62437075644
    },
    {
      "date": "1997-02-23",
      "predicted_price": 308484.7977249869
    },
    {
      "date": "1997-03-16",
      "predicted_price": 301542.35491305246
    },
    {
      "date": "1997-04-07",
      "predicted_price": 296223.65079402964
    },
    {
      "date": "1997-04-28",
      "predicted_price": 296853.7615969503
    },
    {
      "date": "1997-05-19",
      "predicted_price": 297496.4304389455
    },
    {
      "date": "1997-06-09",
      "predicted_price": 298151.591290816
    },
    {
      "date": "1997-07-01",
      "predicted_price": 298793.11908916925
    },
    {
      "date": "1997-07-22",
      "predicted_price": 300013.70953831146
    },
    {
      "date": "1997-08-12",
      "predicted_price": 301259.8382075015
    },
    {
      "date": "1997-09-02",
      "predicted_price": 302522.84275352134
    },
    {
      "date": "1997-09-24",
      "predicted_price": 303802.74637312954
    },
    {
      "date": "1997-10-15",
      "predicted_price": 305818.9806290967
    },
    {
      "date": "1997-11-05",
      "predicted_price": 308246.0407983927
    },
    {
      "date": "1997-11-26",
      "predicted_price": 310699.7492540745
    },
    {
      "date": "1997-12-17",
      "predicted_price": 313180.3116095974
    },
    {
      "date": "1998-01-08",
      "predicted_price": 316114.46076821507
    },
    {
      "date": "1998-01-29",
      "predicted_price": 319831.3093148731
    },
    {
      "date": "1998-02-19",
      "predicted_price": 323586.2370116334
    },
    {
      "date": "1998-03-12",
      "predicted_price": 327379.6420217494
    },
    {
      "date": "1998-04-03",
      "predicted_price": 331183.53840829956
    },
    {
      "date": "1998-04-24",
      "predicted_price": 333284.4116949682
    },
    {
      "date": "1998-05-15",
      "predicted_price": 335408.593273379
    },
    {
      "date": "1998-06-05",
      "predicted_price": 337556.19432087586
    },
    {
      "date": "1998-06-26",
      "predicted_price": 339727.32550544036
    },
    {
      "date": "1998-07-18",
      "predicted_price": 341480.0698413935
    },
    {
      "date": "1998-08-08",
      "predicted_price": 343101.1755424891
    },
    {
      "date": "1998-08-29",
      "predicted_price": 344740.42819808156
    },
    {
      "date": "1998-09-19",
      "predicted_price": 346397.8418043831
    },
    {
      "date": "1998-10-11",
      "predicted_price": 348623.39862984454
    },
    {
      "date": "1998-11-01",
      "predicted_price": 351520.4237094861
    },
    {
      "date": "1998-11-22",
      "predicted_price": 354447.4292997173
    },
    {
      "date": "1998-12-13",
      "predicted_price": 357404.6143508705
    },
    {
      "date": "1999-01-03",
      "predicted_price": 360443.74939201324
    },
    {
      "date": "1999-01-25",
      "predicted_price": 364204.5918563863
    },
    {
      "date": "1999-02-15",
      "predicted_price": 367913.78793600114
    },
    {
      "date": "1999-03-08",
      "predicted_price": 371660.596549461
    },
    {
      "date": "1999-03-29",
      "predicted_price": 375445.3142659656
    },
    {
      "date": "1999-04-20",
      "predicted_price": 379902.1090170411
    },
    {
      "date": "1999-05-11",
      "predicted_price": 384380.3661860666
    },
    {
      "date": "1999-06-01",
      "predicted_price": 388903.7445710326
    },
    {
      "date": "1999-06-22",
      "predicted_price": 393472.6305389903
    },
    {
      "date": "1999-07-13",
      "predicted_price": 398780.2963524225
    },
    {
      "date": "1999-08-04",
      "predicted_price": 404881.7556510999
    },
    {
      "date": "1999-08-25",
      "predicted_price": 410860.83476389846
    },
    {
      "date": "1999-09-15",
      "predicted_price": 416900.2765513962
    },
    {
      "date": "1999-10-06",
      "predicted_price": 423000.64857964264
    },
    {
      "date": "1999-10-28",
      "predicted_price": 429349.5166451895
    },
    {
      "date": "1999-11-18",
      "predicted_price": 435574.44084057625
    },
    {
      "date": "1999-12-09",
      "predicted_price": 441862.0026711748
    },
    {
      "date": "1999-12-30",
      "predicted_price": 448212.766724247
    },
    {
      "date": "2000-01-20",
      "predicted_price": 454065.6656689073
    },
    {
      "date": "2000-02-11",
      "predicted_price": 460068.06710942293
    },
    {
      "date": "2000-03-03",
      "predicted_price": 465967.5502333592
    },
    {
      "date": "2000-03-24",
      "predicted_price": 471925.51953071146
    },
    {
      "date": "2000-04-14",
      "predicted_price": 475859.5259987939
    },
    {
      "date": "2000-05-06",
      "predicted_price": 478452.45130858856
    },
    {
      "date": "2000-05-27",
      "predicted_price": 483484.2054919415
    },
    {
      "date": "2000-06-17",
      "predicted_price": 483703.84527733544
    },
    {
      "date": "2000-07-08",
      "predicted_price": 486583.9561167978
    },
    {
      "date": "2000-07-30",
      "predicted_price": 490000.95834179607
    },
    {
      "date": "2000-08-20",
      "predicted_price": 493414.2965188174
    },
    {
      "date": "2000-09-10",
      "predicted_price": 496857.3023068494
    },
    {
      "date": "2000-10-01",
      "predicted_price": 500330.05771880783
    },
    {
      "date": "2000-10-22",
      "predicted_price": 505245.4077948824
    },
    {
      "date": "2000-11-13",
      "predicted_price": 510332.4563976174
    },
    {
      "date": "2000-12-04",
      "predicted_price": 515363.1634777291
    },
    {
      "date": "2000-12-25",
      "predicted_price": 520440.33377122175
    },
    {
      "date": "2001-01-15",
      "predicted_price": 526084.3601832588
    },
    {
      "date": "2001-02-06",
      "predicted_price": 532205.6089450815
    },
    {
      "date": "2001-02-27",
      "predicted_price": 538240.2857457864
    },
    {
      "date": "2001-03-20",
      "predicted_price": 544331.6652530177
    },
    {
      "date": "2001-04-10",
      "predicted_price": 549526.5586036011
    },
    {
      "date": "2001-05-01",
      "predicted_price": 553403.4061828402
    },
    {
      "date": "2001-05-23",
      "predicted_price": 557348.1724553243
    },
    {
      "date": "2001-06-13",
      "predicted_price": 561288.0345525731
    },
    {
      "date": "2001-07-04",
      "predicted_price": 565453.3524002747
    },
    {
      "date": "2001-07-25",
      "predicted_price": 570993.4392514442
    },
    {
      "date": "2001-08-16",
      "predicted_price": 576693.6675370825
    },
    {
      "date": "2001-09-06",
      "predicted_price": 582333.0169435347
    },
    {
      "date": "2001-09-27",
      "predicted_price": 588022.0591366969
    },
    {
      "date": "2001-10-18",
      "predicted_price": 595642.1753879705
    },
    {
      "date": "2001-11-08",
      "predicted_price": 603825.9553679468
    },
    {
      "date": "2001-11-30",
      "predicted_price": 612315.9453206392
    },
    {
      "date": "2001-12-21",
      "predicted_price": 620657.3080834128
    },
    {
      "date": "2002-01-11",
      "predicted_price": 628366.4403950335
    },
    {
      "date": "2002-02-01",
      "predicted_price": 635308.2570569695
    },
    {
      "date": "2002-02-23",
      "predicted_price": 642471.3084892947
    },
    {
      "date": "2002-03-16",
      "predicted_price": 649538.4125485847
    },
    {
      "date": "2002-04-06",
      "predicted_price": 656288.273064105
    },
    {
      "date": "2002-04-27",
      "predicted_price": 661759.3178251204
    },
    {
      "date": "2002-05-18",
      "predicted_price": 667273.8380102288
    },
    {
      "date": "2002-06-09",
      "predicted_price": 672913.0077961946
    },
    {
      "date": "2002-06-30",
      "predicted_price": 678515.3689060545
    },
    {
      "date": "2002-07-21",
      "predicted_price": 684941.4114450149
    },
    {
      "date": "2002-08-11",
      "predicted_price": 691473.684568796
    },
    {
      "date": "2002-09-02",
      "predicted_price": 698182.8837780383
    },
    {
      "date": "2002-09-23",
      "predicted_price": 704823.8727214731
    },
    {
      "date": "2002-10-14",
      "predicted_price": 713095.7420073947
    },
    {
      "date": "2002-11-04",
      "predicted_price": 722483.6349020754
    },
    {
      "date": "2002-11-25",
      "predicted_price": 731956.8072345759
    },
    {
      "date": "2002-12-17",
      "predicted_price": 741769.0192039842
    },
    {
      "date": "2003-01-07",
      "predicted_price": 752185.558231615
    },
    {
      "date": "2003-01-28",
      "predicted_price": 764793.0645474335
    },
    {
      "date": "2003-02-18",
      "predicted_price": 777521.0376415692
    },
    {
      "date": "2003-03-12",
      "predicted_price": 790767.6679002057
    },
    {
      "date": "2003-04-02",
      "predicted_price": 803679.6333274976
    },
    {
      "date": "2003-04-23",
      "predicted_price": 814827.0589028591
    },
    {
      "date": "2003-05-14",
      "predicted_price": 826075.3980591994
    },
    {
      "date": "2003-06-05",
      "predicted_price": 837738.0642808496
    },
    {
      "date": "2003-06-26",
      "predicted_price": 849191.6936969933
    },
    {
      "date": "2003-07-17",
      "predicted_price": 857891.454415494
    },
    {
      "date": "2003-08-07",
      "predicted_price": 865683.2858616613
    },
    {
      "date": "2003-08-28",
      "predicted_price": 873534.1888719724
    },
    {
      "date": "2003-09-19",
      "predicted_price": 881580.8502334841
    },
    {
      "date": "2003-10-10",
      "predicted_price": 891930.9366059832
    },
    {
      "date": "2003-10-31",
      "predicted_price": 905774.123732823
    },
    {
      "date": "2003-11-21",
      "predicted_price": 919744.0320444716
    },
    {
      "date": "2003-12-13",
      "predicted_price": 934260.3821085416
    },
    {
      "date": "2004-01-03",
      "predicted_price": 948574.8209857349
    },
    {
      "date": "2004-01-24",
      "predicted_price": 964029.6300291225
    },
    {
      "date": "2004-02-14",
      "predicted_price": 979626.5106923359
    },
    {
      "date": "2004-03-06",
      "predicted_price": 995366.2247188968
    },
    {
      "date": "2004-03-28",
      "predicted_price": 1011733.921086138
    },
    {
      "date": "2004-04-18",
      "predicted_price": 1026140.4469269089
    },
    {
      "date": "2004-05-09",
      "predicted_price": 1040248.8417930761
    },
    {
      "date": "2004-05-30",
      "predicted_price": 1054479.4857527318
    },
    {
      "date": "2004-06-21",
      "predicted_price": 1069229.4114524662
    },
    {
      "date": "2004-07-12",
      "predicted_price": 1084714.0072105443
    },
    {
      "date": "2004-08-02",
      "predicted_price": 1101313.649829652
    },
    {
      "date": "2004-08-23",
      "predicted_price": 1118060.516242879
    },
    {
      "date": "2004-09-13",
      "predicted_price": 1134955.3127635587
    },
    {
      "date": "2004-10-05",
      "predicted_price": 1152318.1421352646
    },
    {
      "date": "2004-10-26",
      "predicted_price": 1168447.6257397574
    },
    {
      "date": "2004-11-16",
      "predicted_price": 1184715.0511244254
    },
    {
      "date": "2004-12-07",
      "predicted_price": 1201121.0219783105
    },
    {
      "date": "2004-12-29",
      "predicted_price": 1218130.4025225986
    },
    {
      "date": "2005-01-19",
      "predicted_price": 1233127.4698478796
    },
    {
      "date": "2005-02-09",
      "predicted_price": 1247925.0511795252
    },
    {
      "date": "2005-03-02",
      "predicted_price": 1262840.7359148385
    },
    {
      "date": "2005-03-23",
      "predicted_price": 1277874.955974556
    },
    {
      "date": "2005-04-14",
      "predicted_price": 1293354.9329702244
    },
    {
      "date": "2005-05-05",
      "predicted_price": 1308541.2339265908
    },
    {
      "date": "2005-05-26",
      "predicted_price": 1323846.3578212745
    },
    {
      "date": "2005-06-16",
      "predicted_price": 1339270.711354451
    },
    {
      "date": "2005-07-08",
      "predicted_price": 1356617.5695843466
    },
    {
      "date": "2005-07-29",
      "predicted_price": 1376786.1897591017
    },
    {
      "date": "2005-08-19",
      "predicted_price": 1397125.3260704011
    },
    {
      "date": "2005-09-09",
      "predicted_price": 1417635.6620858242
    },
    {
      "date": "2005-09-30",
      "predicted_price": 1438317.8743957083
    },
    {
      "date": "2005-10-22",
      "predicted_price": 1470160.910297384
    },
    {
      "date": "2005-11-12",
      "predicted_price": 1501850.0330769422
    },
    {
      "date": "2005-12-03",
      "predicted_price": 1533830.3302891823
    },
    {
      "date": "2005-12-24",
      "predicted_price": 1566103.1120848288
    },
    {
      "date": "2006-01-15",
      "predicted_price": 1597766.6594933837
    },
    {
      "date": "2006-02-05",
      "predicted_price": 1627466.220010742
    },
    {
      "date": "2006-02-26",
      "predicted_price": 1657427.4814837899
    },
    {
      "date": "2006-03-19",
      "predicted_price": 1687651.516256395
    },
    {
      "date": "2006-04-10",
      "predicted_price": 1717013.1498055656
    },
    {
      "date": "2006-05-01",
      "predicted_price": 1742548.54644996
    },
    {
      "date": "2006-05-22",
      "predicted_price": 1768293.1208750335
    },
    {
      "date": "2006-06-12",
      "predicted_price": 1794247.6024172693
    },
    {
      "date": "2006-07-03",
      "predicted_price": 1820497.7927470969
    },
    {
      "date": "2006-07-25",
      "predicted_price": 1848790.835599124
    },
    {
      "date": "2006-08-15",
      "predicted_price": 1876473.7787416093
    },
    {
      "date": "2006-09-05",
      "predicted_price": 1904381.1712769847
    },
    {
      "date": "2006-09-26",
      "predicted_price": 1932513.7548785375
    },
    {
      "date": "2006-10-18",
      "predicted_price": 1971925.2883927326
    },
    {
      "date": "2006-11-08",
      "predicted_price": 2013486.062438879
    },
    {
      "date": "2006-11-29",
      "predicted_price": 2055412.4512700639
    },
    {
      "date": "2006-12-20",
      "predicted_price": 2097705.820254278
    },
    {
      "date": "2007-01-10",
      "predicted_price": 2138441.7117754496
    },
    {
      "date": "2007-02-01",
      "predicted_price": 2178056.171224343
    },
    {
      "date": "2007-02-22",
      "predicted_price": 2216714.185117569
    },
    {
      "date": "2007-03-15",
      "predicted_price": 2255694.521876537
    },
    {
      "date": "2007-04-05",
      "predicted_price": 2293289.354107138
    },
    {
      "date": "2007-04-27",
      "predicted_price": 2323913.0630987175
    },
    {
      "date": "2007-05-18",
      "predicted_price": 2353919.959459236
    },
    {
      "date": "2007-06-08",
      "predicted_price": 2384149.5018666093
    },
    {
      "date": "2007-06-29",
      "predicted_price": 2414602.2327346792
    },
    {
      "date": "2007-07-20",
      "predicted_price": 2445103.965224112
    },
    {
      "date": "2007-08-11",
      "predicted_price": 2476662.354836216
    },
    {
      "date": "2007-09-01",
      "predicted_price": 2507591.7019065884
    },
    {
      "date": "2007-09-22",
      "predicted_price": 2538744.2532152566
    },
    {
      "date": "2007-10-13",
      "predicted_price": 2562316.774105991
    },
    {
      "date": "2007-11-04",
      "predicted_price": 2579959.569930669
    },
    {
      "date": "2007-11-25",
      "predicted_price": 2597481.033194651
    },
    {
      "date": "2007-12-16",
      "predicted_price": 2615081.698232822
    },
    {
      "date": "2008-01-06",
      "predicted_price": 2631161.3785176417
    },
    {
      "date": "2008-01-27",
      "predicted_price": 2641674.899203127
    },
    {
      "date": "2008-02-18",
      "predicted_price": 2652054.0425088312
    },
    {
      "date": "2008-03-10",
      "predicted_price": 2662576.586038431
    },
    {
      "date": "2008-03-31",
      "predicted_price": 2673103.346687745
    },
    {
      "date": "2008-04-21",
      "predicted_price": 2665534.2367294068
    },
    {
      "date": "2008-05-13",
      "predicted_price": 2655485.541605039
    },
    {
      "date": "2008-06-03",
      "predicted_price": 2646306.2007813174
    },
    {
      "date": "2008-06-24",
      "predicted_price": 2636933.1694098213
    },
    {
      "date": "2008-07-15",
      "predicted_price": 2609951.7887691613
    },
    {
      "date": "2008-08-05",
      "predicted_price": 2573210.377641084
    },
    {
      "date": "2008-08-27",
      "predicted_price": 2533623.174335606
    },
    {
      "date": "2008-09-17",
      "predicted_price": 2495938.5327369976
    },
    {
      "date": "2008-10-08",
      "predicted_price": 2468958.6716747195
    },
    {
      "date": "2008-10-29",
      "predicted_price": 2465759.9144407674
    },
    {
      "date": "2008-11-20",
      "predicted_price": 2461700.740525983
    },
    {
      "date": "2008-12-11",
      "predicted_price": 2458248.558060997
    },
    {
      "date": "2009-01-01",
      "predicted_price": 2454670.279088035
    },
    {
      "date": "2009-01-22",
      "predicted_price": 2477441.3533680146
    },
    {
      "date": "2009-02-13",
      "predicted_price": 2501308.4862975865
    },
    {
      "date": "2009-03-06",
      "predicted_price": 2524775.4642204517
    },
    {
      "date": "2009-03-27",
      "predicted_price": 2548376.6679748637
    },
    {
      "date": "2009-04-17",
      "predicted_price": 2581665.2945067342
    },
    {
      "date": "2009-05-08",
      "predicted_price": 2618447.9008189826
    },
    {
      "date": "2009-05-30",
      "predicted_price": 2656654.005962047
    },
    {
      "date": "2009-06-20",
      "predicted_price": 2693958.1910642767
    },
    {
      "date": "2009-07-11",
      "predicted_price": 2733647.7490359023
    },
    {
      "date": "2009-08-01",
      "predicted_price": 2776121.7954109046
    },
    {
      "date": "2009-08-23",
      "predicted_price": 2820309.226737758
    },
    {
      "date": "2009-09-13",
      "predicted_price": 2863396.8241252042
    },
    {
      "date": "2009-10-04",
      "predicted_price": 2905312.2714159987
    },
    {
      "date": "2009-10-25",
      "predicted_price": 2937321.5724993856
    },
    {
      "date": "2009-11-15",
      "predicted_price": 2969526.23661765
    },
    {
      "date": "2009-12-07",
      "predicted_price": 3002808.552295727
    },
    {
      "date": "2009-12-28",
      "predicted_price": 3035408.2952049403
    },
    {
      "date": "2010-01-18",
      "predicted_price": 3074049.8840443613
    },
    {
      "date": "2010-02-08",
      "predicted_price": 3114468.3175690416
    },
    {
      "date": "2010-03-02",
      "predicted_price": 3156403.5071476386
    },
    {
      "date": "2010-03-23",
      "predicted_price": 3197355.9940199773
    },
    {
      "date": "2010-04-13",
      "predicted_price": 3224795.8826127853
    },
    {
      "date": "2010-05-04",
      "predicted_price": 3241302.322056132
    },
    {
      "date": "2010-05-25",
      "predicted_price": 3257846.252457697
    },
    {
      "date": "2010-06-16",
      "predicted_price": 3274511.8258944214
    },
    {
      "date": "2010-07-07",
      "predicted_price": 3294931.1298033604
    },
    {
      "date": "2010-07-28",
      "predicted_price": 3325752.8786701006
    },
    {
      "date": "2010-08-18",
      "predicted_price": 3356738.138519527
    },
    {
      "date": "2010-09-09",
      "predicted_price": 3388652.7142289574
    },
    {
      "date": "2010-09-30",
      "predicted_price": 3419968.0903712576
    },
    {
      "date": "2010-10-21",
      "predicted_price": 3468333.079051713
    },
    {
      "date": "2010-11-11",
      "predicted_price": 3518161.1483009555
    },
    {
      "date": "2010-12-02",
      "predicted_price": 3568312.6829234506
    },
    {
      "date": "2010-12-24",
      "predicted_price": 3620440.9944454604
    },
    {
      "date": "2011-01-14",
      "predicted_price": 3680767.0745859593
    },
    {
      "date": "2011-02-04",
      "predicted_price": 3747791.114951677
    },
    {
      "date": "2011-02-25",
      "predicted_price": 3815277.7304473803
    },
    {
      "date": "2011-03-19",
      "predicted_price": 3885671.0182793844
    },
    {
      "date": "2011-04-09",
      "predicted_price": 3938033.998360097
    },
    {
      "date": "2011-04-30",
      "predicted_price": 3962669.512375527
    },
    {
      "date": "2011-05-21",
      "predicted_price": 3987387.196051883
    },
    {
      "date": "2011-06-11",
      "predicted_price": 4012186.6852057828
    },
    {
      "date": "2011-07-03",
      "predicted_price": 4037426.844503742
    },
    {
      "date": "2011-07-24",
      "predicted_price": 4062306.4994088407
    },
    {
      "date": "2011-08-14",
      "predicted_price": 4087266.1264648684
    },
    {
      "date": "2011-09-04",
      "predicted_price": 4112305.3419277137
    },
    {
      "date": "2011-09-26",
      "predicted_price": 4137791.8338301126
    },
    {
      "date": "2011-10-17",
      "predicted_price": 4168781.43742798
    },
    {
      "date": "2011-11-07",
      "predicted_price": 4201877.713830141
    },
    {
      "date": "2011-11-28",
      "predicted_price": 4235117.258630568
    },
    {
      "date": "2011-12-20",
      "predicted_price": 4269248.308349798
    },
    {
      "date": "2012-01-10",
      "predicted_price": 4304494.616929468
    },
    {
      "date": "2012-01-31",
      "predicted_price": 4342352.557978199
    },
    {
      "date": "2012-02-21",
      "predicted_price": 4380386.875482361
    },
    {
      "date": "2012-03-13",
      "predicted_price": 4418597.228925442
    },
    {
      "date": "2012-04-04",
      "predicted_price": 4456661.373343279
    },
    {
      "date": "2012-04-25",
      "predicted_price": 4485040.343167041
    },
    {
      "date": "2012-05-16",
      "predicted_price": 4513511.418137085
    },
    {
      "date": "2012-06-06",
      "predicted_price": 4542074.158177479
    },
    {
      "date": "2012-06-28",
      "predicted_price": 4571218.851703639
    },
    {
      "date": "2012-07-19",
      "predicted_price": 4598148.958124185
    },
    {
      "date": "2012-08-09",
      "predicted_price": 4624810.677724744
    },
    {
      "date": "2012-08-30",
      "predicted_price": 4651544.919325752
    },
    {
      "date": "2012-09-20",
      "predicted_price": 4678351.207273355
    },
    {
      "date": "2012-10-12",
      "predicted_price": 4714076.207373109
    },
    {
      "date": "2012-11-02",
      "predicted_price": 4757763.787614681
    },
    {
      "date": "2012-11-23",
      "predicted_price": 4801653.524705563
    },
    {
      "date": "2012-12-14",
      "predicted_price": 4845744.970286618
    },
    {
      "date": "2013-01-05",
      "predicted_price": 4891720.317619216
    },
    {
      "date": "2013-01-26",
      "predicted_price": 4938953.892584119
    },
    {
      "date": "2013-02-16",
      "predicted_price": 4986408.973319444
    },
    {
      "date": "2013-03-09",
      "predicted_price": 5034085.068742982
    },
    {
      "date": "2013-03-30",
      "predicted_price": 5081981.675024294
    },
    {
      "date": "2013-04-21",
      "predicted_price": 5110774.69848193
    },
    {
      "date": "2013-05-12",
      "predicted_price": 5136863.529484847
    },
    {
      "date": "2013-06-02",
      "predicted_price": 5163002.4493659055
    },
    {
      "date": "2013-06-23",
      "predicted_price": 5189190.910473803
    },
    {
      "date": "2013-07-15",
      "predicted_price": 5225658.901156475
    },
    {
      "date": "2013-08-05",
      "predicted_price": 5267275.444624599
    },
    {
      "date": "2013-08-26",
      "predicted_price": 5309054.526308762
    },
    {
      "date": "2013-09-16",
      "predicted_price": 5350995.561965393
    },
    {
      "date": "2013-10-07",
      "predicted_price": 5394295.844605414
    },
    {
      "date": "2013-10-29",
      "predicted_price": 5442292.164648311
    },
    {
      "date": "2013-11-19",
      "predicted_price": 5489213.168783557
    },
    {
      "date": "2013-12-10",
      "predicted_price": 5536326.572988926
    },
    {
      "date": "2013-12-31",
      "predicted_price": 5583631.731107225
    },
    {
      "date": "2014-01-22",
      "predicted_price": 5614818.911813717
    },
    {
      "date": "2014-02-12",
      "predicted_price": 5644496.558956155
    },
    {
      "date": "2014-03-05",
      "predicted_price": 5674234.060116924
    },
    {
      "date": "2014-03-26",
      "predicted_price": 5704030.800776078
    },
    {
      "date": "2014-04-16",
      "predicted_price": 5738672.540484824
    },
    {
      "date": "2014-05-08",
      "predicted_price": 5776256.425323734
    },
    {
      "date": "2014-05-29",
      "predicted_price": 5813173.738323274
    },
    {
      "date": "2014-06-19",
      "predicted_price": 5850196.732087908
    },
    {
      "date": "2014-07-10",
      "predicted_price": 5883410.582741009
    },
    {
      "date": "2014-08-01",
      "predicted_price": 5911444.991349318
    },
    {
      "date": "2014-08-22",
      "predicted_price": 5939184.022598508
    },
    {
      "date": "2014-09-12",
      "predicted_price": 5966959.378347944
    },
    {
      "date": "2014-10-03",
      "predicted_price": 5994208.748049269
    },
    {
      "date": "2014-10-25",
      "predicted_price": 6014951.293143035
    },
    {
      "date": "2014-11-15",
      "predicted_price": 6035651.204506696
    },
    {
      "date": "2014-12-06",
      "predicted_price": 6056392.203279107
    },
    {
      "date": "2014-12-27",
      "predicted_price": 6077089.391350133
    },
    {
      "date": "2015-01-17",
      "predicted_price": 6110581.052806367
    },
    {
      "date": "2015-02-08",
      "predicted_price": 6149339.0279652625
    },
    {
      "date": "2015-03-01",
      "predicted_price": 6187378.069450396
    },
    {
      "date": "2015-03-22",
      "predicted_price": 6225515.144781332
    },
    {
      "date": "2015-04-12",
      "predicted_price": 6249913.113563523
    },
    {
      "date": "2015-05-04",
      "predicted_price": 6260396.812439547
    },
    {
      "date": "2015-05-25",
      "predicted_price": 6271263.377847909
    },
    {
      "date": "2015-06-15",
      "predicted_price": 6282043.9315374065
    },
    {
      "date": "2015-07-06",
      "predicted_price": 6290571.256887666
    },
    {
      "date": "2015-07-27",
      "predicted_price": 6291389.028313622
    },
    {
      "date": "2015-08-18",
      "predicted_price": 6291110.487058683
    },
    {
      "date": "2015-09-08",
      "predicted_price": 6291622.314783823
    },
    {
      "date": "2015-09-29",
      "predicted_price": 6291982.158759542
    },
    {
      "date": "2015-10-20",
      "predicted_price": 6294416.255314026
    },
    {
      "date": "2015-11-11",
      "predicted_price": 6296153.500323472
    },
    {
      "date": "2015-12-02",
      "predicted_price": 6298588.715539111
    },
    {
      "date": "2015-12-23",
      "predicted_price": 6300886.566926646
    },
    {
      "date": "2016-01-13",
      "predicted_price": 6317187.363119401
    },
    {
      "date": "2016-02-03",
      "predicted_price": 6344787.231411236
    },
    {
      "date": "2016-02-25",
      "predicted_price": 6372777.335684904
    },
    {
      "date": "2016-03-17",
      "predicted_price": 6400420.740508908
    },
    {
      "date": "2016-04-07",
      "predicted_price": 6432289.0929676695
    },
    {
      "date": "2016-04-28",
      "predicted_price": 6475615.70181408
    },
    {
      "date": "2016-05-20",
      "predicted_price": 6520177.220883457
    },
    {
      "date": "2016-06-10",
      "predicted_price": 6563736.3908642
    },
    {
      "date": "2016-07-01",
      "predicted_price": 6607408.777506926
    },
    {
      "date": "2016-07-22",
      "predicted_price": 6658640.605303703
    },
    {
      "date": "2016-08-12",
      "predicted_price": 6710149.299223842
    },
    {
      "date": "2016-09-03",
      "predicted_price": 6763313.591469596
    },
    {
      "date": "2016-09-24",
      "predicted_price": 6815137.897920753
    },
    {
      "date": "2016-10-15",
      "predicted_price": 6858526.216825741
    },
    {
      "date": "2016-11-05",
      "predicted_price": 6897393.606801645
    },
    {
      "date": "2016-11-27",
      "predicted_price": 6937219.928260843
    },
    {
      "date": "2016-12-18",
      "predicted_price": 6976236.588205292
    },
    {
      "date": "2017-01-08",
      "predicted_price": 7016323.974601352
    },
    {
      "date": "2017-01-29",
      "predicted_price": 7058641.776225639
    },
    {
      "date": "2017-02-19",
      "predicted_price": 7101048.096833742
    },
    {
      "date": "2017-03-13",
      "predicted_price": 7144591.216379454
    },
    {
      "date": "2017-04-03",
      "predicted_price": 7187155.479266601
    },
    {
      "date": "2017-04-24",
      "predicted_price": 7229581.112086724
    },
    {
      "date": "2017-05-15",
      "predicted_price": 7272090.070863328
    },
    {
      "date": "2017-06-06",
      "predicted_price": 7315730.953095843
    },
    {
      "date": "2017-06-27",
      "predicted_price": 7358406.625810438
    },
    {
      "date": "2017-07-18",
      "predicted_price": 7422721.163698527
    },
    {
      "date": "2017-08-08",
      "predicted_price": 7492856.009968663
    },
    {
      "date": "2017-08-30",
      "predicted_price": 7565582.164954631
    },
    {
      "date": "2017-09-20",
      "predicted_price": 7636180.591677743
    },
    {
      "date": "2017-10-11",
      "predicted_price": 7696801.413922022
    },
    {
      "date": "2017-11-01",
      "predicted_price": 7745595.46415889
    },
    {
      "date": "2017-11-22",
      "predicted_price": 7794492.0642605005
    },
    {
      "date": "2017-12-14",
      "predicted_price": 7844820.340524401
    },
    {
      "date": "2018-01-04",
      "predicted_price": 7889274.615164596
    },
    {
      "date": "2018-01-25",
      "predicted_price": 7901765.234383872
    },
    {
      "date": "2018-02-15",
      "predicted_price": 7914158.573077392
    },
    {
      "date": "2018-03-09",
      "predicted_price": 7926041.894947161
    },
    {
      "date": "2018-03-30",
      "predicted_price": 7938238.322926906
    },
    {
      "date": "2018-04-20",
      "predicted_price": 7940218.582676782
    },
    {
      "date": "2018-05-11",
      "predicted_price": 7940779.147947176
    },
    {
      "date": "2018-06-01",
      "predicted_price": 7941181.245293744
    },
    {
      "date": "2018-06-23",
      "predicted_price": 7940460.750025334
    },
    {
      "date": "2018-07-14",
      "predicted_price": 7956244.000949748
    },
    {
      "date": "2018-08-04",
      "predicted_price": 7982304.488604867
    },
    {
      "date": "2018-08-25",
      "predicted_price": 8008338.327802871
    },
    {
      "date": "2018-09-16",
      "predicted_price": 8034620.039136837
    },
    {
      "date": "2018-10-07",
      "predicted_price": 8059035.776928942
    },
    {
      "date": "2018-10-28",
      "predicted_price": 8079173.952420325
    },
    {
      "date": "2018-11-18",
      "predicted_price": 8099253.868111927
    },
    {
      "date": "2018-12-09",
      "predicted_price": 8119274.965244525
    },
    {
      "date": "2018-12-31",
      "predicted_price": 8139236.687290812
    },
    {
      "date": "2019-01-21",
      "predicted_price": 8150715.22240801
    },
    {
      "date": "2019-02-11",
      "predicted_price": 8161519.851968608
    },
    {
      "date": "2019-03-04",
      "predicted_price": 8172219.903451659
    },
    {
      "date": "2019-03-26",
      "predicted_price": 8182383.617517728
    },
    {
      "date": "2019-04-16",
      "predicted_price": 8184578.324542512
    },
    {
      "date": "2019-05-07",
      "predicted_price": 8183037.912042877
    },
    {
      "date": "2019-05-28",
      "predicted_price": 8181335.335509444
    },
    {
      "date": "2019-06-18",
      "predicted_price": 8179470.547167959
    },
    {
      "date": "2019-07-10",
      "predicted_price": 8186400.653039142
    },
    {
      "date": "2019-07-31",
      "predicted_price": 8208433.17667659
    },
    {
      "date": "2019-08-21",
      "predicted_price": 8230415.233031692
    },
    {
      "date": "2019-09-11",
      "predicted_price": 8252346.231549493
    },
    {
      "date": "2019-10-03",
      "predicted_price": 8276045.378622676
    },
    {
      "date": "2019-10-24",
      "predicted_price": 8319043.827907189
    },
    {
      "date": "2019-11-14",
      "predicted_price": 8362085.091442147
    },
    {
      "date": "2019-12-05",
      "predicted_price": 8405168.072809463
    },
    {
      "date": "2019-12-26",
      "predicted_price": 8448291.672288673
    },
    {
      "date": "2020-01-17",
      "predicted_price": 8481311.177672658
    },
    {
      "date": "2020-02-07",
      "predicted_price": 8509302.128537392
    },
    {
      "date": "2020-02-28",
      "predicted_price": 8537263.825112695
    },
    {
      "date": "2020-03-20",
      "predicted_price": 8565195.533328917
    },
    {
      "date": "2020-04-11",
      "predicted_price": 8597838.110731209
    },
    {
      "date": "2020-05-02",
      "predicted_price": 8635072.978726327
    },
    {
      "date": "2020-05-23",
      "predicted_price": 8672315.688770594
    },
    {
      "date": "2020-06-13",
      "predicted_price": 8709565.271993035
    },
    {
      "date": "2020-07-05",
      "predicted_price": 8750391.71693451
    },
    {
      "date": "2020-07-26",
      "predicted_price": 8803008.254649939
    },
    {
      "date": "2020-08-16",
      "predicted_price": 8855692.865678456
    },
    {
      "date": "2020-09-06",
      "predicted_price": 8908444.179641565
    },
    {
      "date": "2020-09-27",
      "predicted_price": 8961260.821587166
    },
    {
      "date": "2020-10-19",
      "predicted_price": 9058003.78784761
    },
    {
      "date": "2020-11-09",
      "predicted_price": 9161323.937057111
    },
    {
      "date": "2020-11-30",
      "predicted_price": 9264908.552142128
    },
    {
      "date": "2020-12-21",
      "predicted_price": 9368754.913331311
    },
    {
      "date": "2021-01-12",
      "predicted_price": 9489381.805702716
    },
    {
      "date": "2021-02-02",
      "predicted_price": 9618347.9411378
    },
    {
      "date": "2021-02-23",
      "predicted_price": 9747664.425153052
    },
    {
      "date": "2021-03-16",
      "predicted_price": 9877327.821342062
    },
    {
      "date": "2021-04-06",
      "predicted_price": 9988448.392520046
    },
    {
      "date": "2021-04-28",
      "predicted_price": 10034835.709096935
    },
    {
      "date": "2021-05-19",
      "predicted_price": 10080004.81468875
    },
    {
      "date": "2021-06-09",
      "predicted_price": 10125181.926058643
    },
    {
      "date": "2021-06-30",
      "predicted_price": 10170365.843396004
    },
    {
      "date": "2021-07-22",
      "predicted_price": 10229181.873856442
    },
    {
      "date": "2021-08-12",
      "predicted_price": 10287011.989502542
    },
    {
      "date": "2021-09-02",
      "predicted_price": 10344892.07089004
    },
    {
      "date": "2021-09-23",
      "predicted_price": 10402820.564035187
    },
    {
      "date": "2021-10-14",
      "predicted_price": 10456885.64129309
    },
    {
      "date": "2021-11-05",
      "predicted_price": 10509950.875234768
    },
    {
      "date": "2021-11-26",
      "predicted_price": 10561492.838099815
    },
    {
      "date": "2021-12-17",
      "predicted_price": 10613053.67195896
    },
    {
      "date": "2022-01-07",
      "predicted_price": 10662126.064726202
    },
    {
      "date": "2022-01-29",
      "predicted_price": 10705527.363604486
    },
    {
      "date": "2022-02-19",
      "predicted_price": 10747798.193132054
    },
    {
      "date": "2022-03-12",
      "predicted_price": 10790049.888397055
    },
    {
      "date": "2022-04-02",
      "predicted_price": 10830057.168586534
    },
    {
      "date": "2022-04-23",
      "predicted_price": 10802082.03191837
    },
    {
      "date": "2022-05-15",
      "predicted_price": 10771621.010649374
    },
    {
      "date": "2022-06-05",
      "predicted_price": 10743118.313973049
    },
    {
      "date": "2022-06-26",
      "predicted_price": 10714355.07528084
    },
    {
      "date": "2022-07-17",
      "predicted_price": 10695607.427606102
    },
    {
      "date": "2022-08-08",
      "predicted_price": 10678557.347672505
    },
    {
      "date": "2022-08-29",
      "predicted_price": 10662873.756856324
    },
    {
      "date": "2022-09-19",
      "predicted_price": 10646978.257108156
    },
    {
      "date": "2022-10-10",
      "predicted_price": 10650155.173906408
    },
    {
      "date": "2022-10-31",
      "predicted_price": 10680669.837243842
    },
    {
      "date": "2022-11-22",
      "predicted_price": 10711761.357919894
    },
    {
      "date": "2022-12-13",
      "predicted_price": 10742154.41328784
    },
    {
      "date": "2023-01-03",
      "predicted_price": 10769783.648849681
    },
    {
      "date": "2023-01-24",
      "predicted_price": 10765957.014671989
    },
    {
      "date": "2023-02-15",
      "predicted_price": 10760976.704912625
    },
    {
      "date": "2023-03-08",
      "predicted_price": 10756809.539586985
    },
    {
      "date": "2023-03-29",
      "predicted_price": 10752473.21180238
    },
    {
      "date": "2023-04-19",
      "predicted_price": 10742402.319928119
    },
    {
      "date": "2023-05-11",
      "predicted_price": 10379214.913091592
    }
  ]
  useEffect(() => {
    const Highcharts = window.Highcharts;
    Highcharts.chart('container', {
      chart: {
        type: 'line',
        style: {
          fontFamily: 'Lato, sans-serif', // 全局字体
          // fontSize: '12px' // 可选：全局字体大小
        }
      },
      title: {
        style: {
          display: 'none'
        }
      },
      xAxis: {
        type: 'datetime', // 使用时间轴
        lineColor: '#7f7f7f',
        tickWidth: 0,
        labels: {
          style: {
            color: '#7f7f7f', // 设置年份字体颜色为红色
            fontSize: '12px', // 可选：设置字体大小
          }
        },
        title: {
          text: 'Date',
          style: {
            display: 'none'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Price (Millions)',
          style: {
            display: 'none'
          }
        },
        lineColor: '#7f7f7f',
        labels: {
          style: {
            color: '#7f7f7f',
          }
        },
        gridLineDashStyle: 'Dash', // 设置为虚线
        crosshair: {
          color: '#7f7f7f',
          dashStyle: 'dot',
          width: 1,
          zIndex: 2
        }
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
      },
      tooltip: {
        useHTML: true,
        formatter: function () {
          // 根据 series.name 返回不同内容
          if (this.series.name === 'This Artwork') {
            return `Estimated Price: <b>$${Highcharts.numberFormat(this.y, 0)}</b>`
          }
          else if (this.series.name === 'Similar Artwork') {
            console.log(this.y, this.x)
            const date = new Date(this.x)
            // 1994-05-12
            const dateFormat = formatDate(date)
            const item = similarArtworks.find(item => item.date === dateFormat)
            return `
                  <div style="padding: 10px; max-width: 300px;">
                    <div>${this.series.name}</div>
                    <img src="/trade/desc.png" style="width: 60px;height: 60px;margin-top: 10px;margin-bottom: 10px;border-radius: 4px;display: block;">
                    <div>
                      <b>${item?.name}</b>
                      <div>${item?.size}</div>
                      <div style="border-bottom: 1px solid rgba(0,0,0,0.1);width: 100%;margin-top: 5px;margin-bottom: 5px;"></div>
                      <div style="font-size: 12px;color: rgba(0,0,0,0.6);">Sold for&nbsp;<b style="color: #000;">${Highcharts.numberFormat(item?.price, 0)}</b></div>
                      <div style="font-size: 12px;color: rgba(0,0,0,0.6);">${item?.type}</div>
                      <div style="font-size: 12px;color: rgba(0,0,0,0.6);">${item?.creatDate}</div>
                      <div style="font-size: 12px;color: rgba(0,0,0,0.6);">${item?.place}</div>
                      <div style="font-size: 12px;color: rgba(0,0,0,0.6);max-width: 300px;white-space:break-spaces;">${item?.AuctionName}</div>
                      <div style="font-size: 12px;color: rgba(0,0,0,0.6);">${item?.lot}</div>
                    </div>
                  </div>
                `;
          }
        }
      } as any,
      series: [
        {
          name: 'This Artwork',
          data: predictedTrend.map((item) => [item.date, item.predicted_price]),
          // marker: {
          //   enabled: true,
          //   symbol: 'circle',
          //   radius: 5
          // },
          color: '#f7a35c'
        },
        {
          name: 'Similar Artwork',
          type: 'scatter',
          data: similarArtworks.map((item) => [item.date, item.price]),
          marker: {
            enabled: true,
            symbol: 'circle',
            radius: 5
          },
          color: '#7cb5ec'
        },
      ],
      exporting: {
        enabled: false // 禁用右上角的菜单
      },
      credits: {
        enabled: false // 禁用右下角的 Highcharts.com
      }
    });
  }, [])

  return (
    <div className="w-full md:mt-[16px] mt-[8px]" id="container">
    </div>
  )
}

export const Chart2 = () => {
  const data = [
    { date: '1990-05-15', price: 5000000 },
    { date: '1995-11-07', price: 5800000 },
    { date: '1999-11-09', price: 8400000 },
    { date: '2001-05-10', price: 11500000 },
    { date: '2006-05-03', price: 16500000 },
    { date: '2007-11-06', price: 33641000 },
    { date: '2009-02-23', price: 45720449 },
    { date: '2010-11-03', price: 48802500 },
    { date: '2018-05-08', price: 80750000 },
    { date: '2025-01-01', price: 80750000 }
  ];
  useEffect(() => {
    const Highcharts = window.Highcharts;
    Highcharts.chart('container2', {
      chart: {
        type: 'line',
        style: {
          fontFamily: 'Lato, sans-serif', // 全局字体
          // fontSize: '12px' // 可选：全局字体大小
        }
      },
      title: {
        style: {
          display: 'none'
        }
      },
      xAxis: {
        type: 'datetime', // 使用时间轴
        lineColor: '#7f7f7f',
        tickWidth: 0,
        labels: {
          style: {
            color: '#7f7f7f', // 设置年份字体颜色为红色
            fontSize: '12px', // 可选：设置字体大小
          }
        },
        title: {
          text: 'Date',
          style: {
            display: 'none'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Price (Millions)',
          style: {
            display: 'none'
          }
        },
        lineColor: '#7f7f7f',
        labels: {
          style: {
            color: '#7f7f7f',
          }
        },
        gridLineDashStyle: 'Dash', // 设置为虚线
        crosshair: {
          color: '#7f7f7f',
          dashStyle: 'dot',
          width: 1,
          zIndex: 2
        }
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
      },
      tooltip: {
        useHTML: true,
        formatter: function () {
          return `Price: <b>$${Highcharts.numberFormat(this.y, 0)}</b> <br/> Date: ${formatDate(new Date(this.x))}`
        }
      } as any,
      series: [
        {
          name: 'Price',
          data: data.map((item) => [item.date, item.price]),
          color: '#f7a35c'
        },
      ],
      exporting: {
        enabled: false // 禁用右上角的菜单
      },
      credits: {
        enabled: false // 禁用右下角的 Highcharts.com
      }
    });
  }, [])
  return (
    <div className="w-full md:mt-[16px] mt-[8px]" id="container2">
    </div>
  )
}