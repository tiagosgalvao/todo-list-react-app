import React, { useState, useContext, useCallback, useEffect } from "react";
import TodoSelect from "./components/TodoSelect/TodoSelect";
import FilterContext from "../../../state/filter/Context";
import * as filterActions from "../../../state/filter/actions";
import styles from "./TodoFilter.module.css";

function TodoFilter() {
  const { filter, filterDispatch } = useContext(FilterContext);
  const [selectValue, setSelectValue] = useState(filter);
  const handleFilterUpdate = useCallback(
    (filter) => {
      filterDispatch(filterActions.filterToggle(filter));
    },
    [filterDispatch]
  );
  const handleOptionChange = useCallback(
    (evt) => {
      setSelectValue(evt.target.value);
    },
    [setSelectValue]
  );
  useEffect(() => {
    handleFilterUpdate(selectValue);
  }, [handleFilterUpdate, selectValue]);
  return (
    <div className={styles.container}>
      <TodoSelect
        intialState={selectValue}
        onOptionChange={handleOptionChange}
        options={[
          { value: "all", title: "All tasks" },
          { value: "active", title: "Todo" },
          { value: "completed", title: "Done" },
        ]}
      />
    </div>
  );
}

export default TodoFilter;
