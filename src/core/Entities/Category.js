class Category {
  constructor (props) {
    this.id = props.id
    this.label = props.label
    this._billable = props.isBillable
  }

  get id () { return this._id }

  set id (newId) {
    this._id = newId || this._id
    return this._id
  }

  get label () { return this._label }

  set label (newLabel) {
    this._label = newLabel || this._label
    return this._label
  }

  get isBillable () { return this._billable }

  set isBillable (newBillable) {
    if (typeof newBillable === 'boolean') {
      this._billable = newBillable
      return this._billable
    } else {
      return this._billable
    }
  }
}

export default Category