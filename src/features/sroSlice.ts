import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
//#region sro type
export interface ProductDetailsItemsEntity {
    brandDescription: string;
    styleName?: string | null;
    commodity: string;
    upcCode: string;
    modelCode: string;
    colorCode?: string | null;
    sizeCode?: string | null;
    brandCode: string;
    epcCodes?: (EpcCodesEntity)[] | null;
    numberItems: number;
    price: number;
}
export interface EpcCodesEntity {
    epcCode: string;
    epcStatus: string;
}
export interface Sro {
    productDetailsItems?: (ProductDetailsItemsEntity)[] | null;

}
//#endregion

interface MainInitialStateType {
    sroResponse: Sro;
    products: {
        notFound?: ProductDetailsItemsEntity[],
        unexpected?: ProductDetailsItemsEntity[],
        found?: ProductDetailsItemsEntity[]
    }
}

const initialMainState: MainInitialStateType = {
    //#region sro response
    sroResponse: {
        "productDetailsItems": [
            {
                "brandDescription": "Ray-Ban",
                "styleName": "AVIATOR LARGE METAL",
                "commodity": "Sunglasses",
                "upcCode": "8053672000542",
                "modelCode": "0RB3025",
                "colorCode": "112/19",
                "sizeCode": "58",
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "3015EB8EA0000D80000007EB",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA0000D81000000A6",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 2,
                "price": 165.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": null,
                "commodity": "Sunglasses",
                "upcCode": "713132448762",
                "modelCode": "0RB2140",
                "colorCode": null,
                "sizeCode": null,
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "30142B86B02BD300000007E1",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 1,
                "price": 139.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "N003",
                "commodity": "Sunglasses",
                "upcCode": "8053672399103",
                "modelCode": "0RB2132",
                "colorCode": null,
                "sizeCode": null,
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "3015EB8EA026F98000000769",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 1,
                "price": 135.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "N003",
                "commodity": "Sunglasses",
                "upcCode": "8056597140157",
                "modelCode": "0RB2132",
                "colorCode": null,
                "sizeCode": null,
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "3015EBBC540DAFC000000730",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 1,
                "price": 135.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": null,
                "commodity": "Sunglasses",
                "upcCode": "8053672611502",
                "modelCode": "0RB3447N",
                "colorCode": "001/Z2",
                "sizeCode": "50",
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "3015EB8EA03BB78000000732",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA03BB78100000030",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA03BB781000001A3",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA03BB781000001AC",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 4,
                "price": 165.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "W001",
                "commodity": "Sunglasses",
                "upcCode": "805289048527",
                "modelCode": "0RB2132",
                "colorCode": "901",
                "sizeCode": "52",
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "30143126A404BD0000000736",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB826804BD010000002C",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB826804BD01000000FD",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 3,
                "price": 135.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "N003",
                "commodity": "Sunglasses",
                "upcCode": "8053672351361",
                "modelCode": "0RB2132",
                "colorCode": "622/19",
                "sizeCode": "52",
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "3015EB8EA0225000000007E0",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 1,
                "price": 155.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "AVIATOR LARGE METAL",
                "commodity": "Sunglasses",
                "upcCode": "805289305026",
                "modelCode": "0RB3025",
                "colorCode": "001/51",
                "sizeCode": "55",
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "30143126A41DC980000002F9",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000329",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000032A",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000032B",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000032C",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000032D",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000379",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000037A",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000037B",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000037C",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000037D",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8274007D810000025A",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000412",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000413",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000414",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000415",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000416",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000417",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000418",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006B3",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000419",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006B4",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000041A",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006B5",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000041B",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006B6",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000041C",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006B7",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000041D",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006B8",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000041E",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006B9",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000041F",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006BA",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000257",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000420",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006BB",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000343",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000421",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006BC",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000344",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000422",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006BD",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000345",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000423",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006BE",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000346",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000424",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006BF",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000347",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006C0",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000348",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006C1",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000349",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006C2",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006C3",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006C4",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006C5",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC980000006C6",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000551",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000552",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000553",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000554",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000555",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000556",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000557",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000558",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000559",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000055A",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000055B",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D81000002A8",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000055D",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000055E",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC9800000055F",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000560",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000561",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000562",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000563",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000564",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000392",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000393",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000394",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000395",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000396",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A41DC98000000489",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000048A",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000048B",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000048C",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000048D",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000048E",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000048F",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000490",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000491",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000492",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000493",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000494",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000495",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000496",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000497",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000498",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC98000000499",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000049A",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000049B",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "30143126A41DC9800000049C",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8274007D8001E1BA78",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D800075DB25",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8005AD7FD0",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8000B53611",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000041",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000100",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000101",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000102",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D81000001B8",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D81000001B9",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D81000001BA",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000234",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000235",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000236",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000237",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000238",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D8100000239",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D810000023A",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D810000023B",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D810000023C",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D810000023D",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8274007D810000023E",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 126,
                "price": 155.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "AVIATOR LARGE METAL",
                "commodity": "Sunglasses",
                "upcCode": "8053672561456",
                "modelCode": "0RB3025",
                "colorCode": "002/4O",
                "sizeCode": "58",
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "3015EB8EA036D440000002FF",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000300",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000301",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000302",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000303",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000333",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000334",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000335",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000336",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000337",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000383",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000384",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000385",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000386",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000387",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000439",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000043A",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000034F",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000043B",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000043C",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000350",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000351",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000043D",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000043E",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000352",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000035D",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000043F",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006C7",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000440",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006C8",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000441",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006C9",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000442",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006CA",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000443",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006CB",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000444",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006CC",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000445",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006CD",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000446",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006CE",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000447",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006CF",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000448",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D0",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000449",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D1",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000044A",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D2",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000044B",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D3",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D4",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000044C",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D5",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D6",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D7",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D8",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006D9",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000006DA",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000565",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000566",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000567",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000568",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000569",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000056A",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000056B",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000056C",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000056D",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000056E",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000056F",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000039C",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000570",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000039D",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000571",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000039E",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000572",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000039F",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000573",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000574",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000003A0",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000575",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000576",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000577",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44000000578",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000049D",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000049E",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D4400000049F",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A0",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A1",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A2",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A3",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A4",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A5",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A6",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A7",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A8",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004A9",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004AA",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004AB",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004AC",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004AD",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004AE",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004AF",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440000004B0",
                        "epcStatus": "Missing"
                    },
                    {
                        "epcCode": "3015EB8EA036D440006DB934",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44100000013",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44100000103",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44100000104",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44100000105",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D441000001AB",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D441000001BB",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4410000020D",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4410000020E",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D44100000213",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4410000024E",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D4410000024F",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D441000002AD",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "3015EB8EA036D441000002AE",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 119,
                "price": 165.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "W001",
                "commodity": "Sunglasses",
                "upcCode": "805289052418",
                "modelCode": "0RB2132",
                "colorCode": null,
                "sizeCode": null,
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "30143126A4051E40000007E6",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 1,
                "price": 135.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "AVIATOR",
                "commodity": "Sunglasses",
                "upcCode": "805289004783",
                "modelCode": "0RB3025",
                "colorCode": null,
                "sizeCode": null,
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "30143126A40077800000084E",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A40077800000084F",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000850",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000851",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000852",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000853",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000854",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000855",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000856",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000857",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000858",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000859",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A40077800000085A",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A40077800000085B",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A40077800000085C",
                        "epcStatus": "In stock"
                    },
                    {
                        "epcCode": "30143126A400778000000861",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 16,
                "price": 145.0
            },
            {
                "brandDescription": "Ray-Ban",
                "styleName": "AVIATOR",
                "commodity": "Sunglasses",
                "upcCode": "805289628231",
                "modelCode": "0RB3025",
                "colorCode": null,
                "sizeCode": null,
                "brandCode": "RAY-BAN",
                "epcCodes": [
                    {
                        "epcCode": "30143126A43D59C0000007D1",
                        "epcStatus": "In stock"
                    }
                ],
                "numberItems": 1,
                "price": 145.0
            }
        ]
    },
    //#endregion
    products: {
        notFound: [],
        unexpected: [],
        found: []
    }
}


export const sroSlice = createSlice({
    name: 'mainSlice',
    initialState: initialMainState,
    reducers: {
        handleFound: (state) => {
            state.products.notFound = state.sroResponse.productDetailsItems?.map(item => ({
                ...item, epcCodes: item.epcCodes?.filter((code) => code.epcStatus === "In stock")
            }
            ))
        }
    }
}
)
export const { handleFound } = sroSlice.actions
export default sroSlice.reducer





            // state.sroResponse.productDetailsItems?.map((item) => {
            //     item.epcCodes?.map((code) => {
            //         switch (code.epcStatus) {
            //             case 'Missing':
            //                 state.products.unexpected.push({ epcCode: code.epcCode, epcStatus: code.epcStatus })
            //                 break;
            //             case 'In stock':
            //                 state.products.notFound.push(code.epcCode)
            //         }
            //         // if (code.epcStatus === "Missing") {
            //     state.products.found.push(code)
            // }

            // });
            // })
        //     const found = state.sroResponse.productDetailsItems!.filter(
        //         item => { 
        //             return item.epcCodes?.map(
        //                 code => { 
        //                     if (code.epcStatus === "Missing") { 
        //                         return code.epcCode 
        //                     } 
        //                 }) 
        //             }
        //             )
        //     state.products.found.push(found)
        // }


        // handleCodes:(state )=>{
        //     state.sroResponse.productDetailsItems?.map(item =>{
        //         item.epcCodes?.map(code => { 
        //             if(code.epcStatus === "In stock"){
        //                 state.products.notFound.push(code.epcCode)
        //             } else if(code.epcStatus === "Missing"){
        //             workingObjects = {
        //                 ...workingObjects, missingStockCodes:
        //             }
        //         }
        //         return workingObjects
        //     }})

        //     })
        // piglia sro response da state => costruisci gli array