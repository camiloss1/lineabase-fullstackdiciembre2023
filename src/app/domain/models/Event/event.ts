export class Event {
    location!: Location
    _id!: string
    name!: string
    idCategory!: number
    image!: string
    shortReview!: string
    description!: string
    address!: string
    price!: number
    date!: string
    place!: string
    idCompany!: string
    availableTickets!: number
    isRemoved!: boolean
    createdAt!: string
    updatedAt!: string
    lastUpdate!:number
    __v!: number
  }
  
  export class Location {
    type!: string
    coordinates!: number[]
  }

  export class Events {
    events!: Event[]
  }