export class UpdateInfoModel {
    position : string;
    name : string ;
    weight : string;
    symbol : string;

    constructor(position: string, name: string, weight: string, symbol: string) {
        this.position = position;
        this.name = name;
        this.weight = weight;
        this.symbol = symbol;
      }
}