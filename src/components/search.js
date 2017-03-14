import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

var styles = {
  searchForm: {
    margin: '20px'
  }
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'INBOUND',
      asc: true
    };
  }
  handleSelect(e, i, v) {
    this.setState({ direction: v});
  }
  render() {
    return (
      <div style={styles.searchForm}>
        <SelectField value={this.state.direction} onChange={this.handleSelect.bind(this)}>
            <MenuItem value="INBOUND" primaryText="INBOUND" />
            <MenuItem value="OUTBOUND" primaryText="OUTBOUND" />
        </SelectField><br />
        <DatePicker
          hintText="Date From"
          container="inline"
          mode="landscape"
          onChange={ (e, d) => this.setState({ dateFrom: (new Date(d)).toISOString() }) }
        /><br />
        <DatePicker
          hintText="Date To"
          container="inline"
          mode="landscape"
          onChange={ (e, d) => this.setState({ dateTo: (new Date(d)).toISOString() }) }
        /><br />
        <RaisedButton label="Search" onTouchTap={ () => this.props.fetchInvoices(this.state) } />

      </div>
    );
  }
}

//window.SearchForm = SearchForm;
export default SearchForm;