export interface I<%= modelName %>DTO {}

export interface I<%= modelName %>Model {
  serialize(): I<%= modelName %>DTO;
}

export class <%= modelName %>Model implements I<%= modelName %>Model {
  constructor() {}

  static create(dto: I<%= modelName %>DTO): I<%= modelName %>Model {
    return new <%= modelName %>Model();
  }

  serialize(): I<%= modelName %>DTO {
    return {};
  }
}
