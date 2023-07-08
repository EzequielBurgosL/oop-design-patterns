export interface PricingStrategy {
  calculatePrice(basePrice: number, taxes: number): number;
}

export class StandardPricingStrategy implements PricingStrategy {
  calculatePrice(basePrice: number, taxes: number): number {
    const basePriceWithTaxes = basePrice * taxes;
    return Number.parseFloat((basePrice + basePriceWithTaxes).toFixed(2));
  }
}

export class BusinessPricingStrategy implements PricingStrategy {
  private BASE_DISCOUNT: number = 0.15;

  calculatePrice(basePrice: number, taxes: number): number {
    const discount = basePrice * this.BASE_DISCOUNT;
    const basePriceWithDiscount = basePrice - discount;
    const basePriceWithTaxes = basePriceWithDiscount * taxes;
    return Number.parseFloat(
      (basePriceWithDiscount + basePriceWithTaxes).toFixed(2),
    );
  }
}
