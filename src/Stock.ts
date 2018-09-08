import { Generic_fromJSON, Generic_toJSON, Reviver } from "../utils/JSONReviver";

export class Stock {
    /**
     * Initializes a Stock from a JSON save state
     */
    static fromJSON(value: any): Stock {
        return Generic_fromJSON(Stock, value.data);
    }

    /**
     * The stock's ticker symbol
     */
    readonly symbol: string;

    /**
     * Name of the company that the stock is for
     */
    readonly name: string;

    /**
     * Stock's share price
     */
    price: number;

    /**
     * Number of shares the player owns in the LONG position
     */
    playerShares: number;

    /**
     * Average price of stocks that the player owns in the LONG position
     */
    playerAvgPx: number;

    /**
     * Number of shares the player owns in the SHORT position
     */
    playerShortShares: number;

    /**
     * Average price of stocks that the player owns in the SHORT position
     */
    playerAvgShortPx: number;

    /**
     * Maximum volatility
     */
    readonly mv: number;

    /**
     * Bear or bull (more likely to go up or down, based on otlkMag)
     */
    b: boolean;

    /**
     * Outlook magnitude. Represents the stock's forecast and likelihood
     * of increasing/decreasing (based on whether its in bear or bull mode)
     */
    otlkMag: number;

    /**
     * The HTML element that displays the stock's info in the UI
     */
    posTxtEl: HTMLElement | null;

    constructor(name: string="",
                symbol: string="",
                mv: number=1,
                b: boolean=true,
                otlkMag: number=0,
                initPrice: number = 10e3) {
        this.name               = name;
        this.symbol             = symbol;
        this.price              = initPrice;
        this.playerShares       = 0;
        this.playerAvgPx        = 0;
        this.playerShortShares  = 0;
        this.playerAvgShortPx   = 0;
        this.mv                 = mv;
        this.b                  = b;
        this.otlkMag            = otlkMag;

        this.posTxtEl           = null;
    }

    /**
     * Serialize the Stock to a JSON save state.
     */
    toJSON(): any {
        return Generic_toJSON("Stock", this);
    }
}

Reviver.constructors.Stock = Stock;
