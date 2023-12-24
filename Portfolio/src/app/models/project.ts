export class Project {
    constructor (
        public _id: string = '',
        public name: string = '',
        public description: string = '',
        public category: string = '',
        public year: number = new Date().getFullYear(),
        public image: string = ''
    ) {}
}

/*
    {
    "projects": [
        {
            "_id": "652588832b712a670d5f1007",
            "name": "Image clasify",
            "description": "Is a simple project for clasify image with Python AI",
            "category": "Personal project",
            "year": 2020,
            "image": "2LuXol0OfIupOzt3_E_heuJH.jpg",
            "__v": 0
        }
    ]
    }
*/