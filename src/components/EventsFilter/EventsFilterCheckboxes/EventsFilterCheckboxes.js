import React from 'react';
import PropTypes from 'prop-types';
import './EventsFilterCheckboxes.scss';
import {connect} from "react-redux";
import {eventFilterBy} from "../../../reducers/eventReducer";

class EventsFilterCheckboxes extends React.Component {
  state = {
    checkedItems: {},
    checkedGroups: {},
  };
  handleChange = (event) => {
    const target = event.target;

    this.setState((prevState) => {
      let groups = {...this.state.checkedGroups};
      let checkedItems = {
        [target.value]: !prevState.checkedItems[target.value]
      };

      if(!Object.keys(groups).includes(target.name) && target.checked) {
        groups[target.name] = [target.value];
      } else if(!target.checked) {
        let checkedEventToDeleteFromFilter = groups[target.name].find(item => {
          return item === target.value;
        });
        let indexToDelete = groups[target.name].indexOf(checkedEventToDeleteFromFilter);
        groups[target.name].splice(indexToDelete, 1);

        //delete group if it's empty
        if(!groups[target.name].length){
          delete groups[target.name]
        }
      } else {
        groups[target.name].push(target.value);
      }

      this.props.eventFilterBy(groups);

      return {
        ...prevState,
        checkedItems: {
          ...prevState.checkedItems,
          ...checkedItems
        },
        checkedGroups: {
          ...groups,
        }
      }
    });

  };

  render() {
    const {filters} = this.props;
    return (
      filters.map(filter => {
        const groupName = filter.id;
        return (
          <fieldset key={filter.id} className='event-filter-block'>
            <legend className="event-filter-block__header">{filter.filterName}</legend>
            {filter.filterItems.map(filterItem => {
              return (
                <label htmlFor={filterItem.label} key={filterItem.key} className="event-filter-row">
                  <input type="checkbox"
                    id={filterItem.label}
                    className="event-filter-row__toggler"
                    name={groupName}
                    value={filterItem.name}
                    checked={!!this.state.checkedItems[filterItem.name]}
                    onChange={this.handleChange}
                  />
                  <span className="event-filter-row__text">{filterItem.name}</span>
                </label>
              )
            })}
          </fieldset>
        )
      })

    )
  }
}

export default connect(
  null,
  dispatch => ({
    eventFilterBy: (properties) => dispatch(eventFilterBy(properties)),
  })
)(EventsFilterCheckboxes);

EventsFilterCheckboxes.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    filterName: PropTypes.string.isRequired,
    filterItems: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      key: PropTypes.number
    }))
  }))
};


