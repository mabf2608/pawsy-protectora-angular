export interface StrapiEntityDto<TAttributes> {
  id: number;
  attributes: TAttributes;
}

export interface StrapiResponseDto<TAttributes> {
  data: StrapiEntityDto<TAttributes>[];
}