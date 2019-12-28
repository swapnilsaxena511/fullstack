export class Employee {
// tslint:disable-next-line:variable-name
_id: string;
name: string;
position: string;
office: string;

Employee() {}

copyInto(data: Employee ) {
    const { _id, name, position, office } = data;

    this._id = _id;
    this.name = name;
    this.position = position;
    this.office = office;
}
}
