import { v4 as uuidV4 } from 'uuid';

export type CategoryProps = {
  name: string;
  is_active?: boolean;
  description?: string;
  created_at?: Date;
};

export class Category {
  public readonly id: string;

  constructor(public readonly props: CategoryProps, id?: string) {
    this.id = id ?? uuidV4();
    this.description = this.props.description;
    this.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  private set name(name: string) {
    this.props.name = name;
  }

  get description(): string {
    return this.props.description;
  }

  private set description(description: string) {
    this.props.description = description ?? null;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  private set is_active(is_active: boolean) {
    this.props.is_active = is_active ?? true;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
