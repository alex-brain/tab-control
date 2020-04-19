import React, { useState } from 'react';
import './index.scss';

const TabControl = ({ tabs, defaultActive }) => {
  const [active, setActive] = useState(defaultActive);

  const onClickHeaderItem = (itemId) => () => {
    setActive(itemId);
  };

  return (
    <div className="tab-control">
      <div className="tab-control-header">
        {Object.values(tabs).map((item) => (
          <div
            key={item.id}
            className={`tab-control-header__item ${item.id === active ? 'tab-control-header__item_active' : ''}`}
            onClick={onClickHeaderItem(item.id)}
          >
            {item.header}
          </div>
        ))}
      </div>
      <div className="tab-control__header">
        {tabs[active].content}
      </div>
    </div>
  );
};

export default TabControl;
