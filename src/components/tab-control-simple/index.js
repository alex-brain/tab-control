import React, { useState } from 'react';
import './index.scss';

const TabControl = ({ tabs }) => {
  const [active, setActive] = useState(0);

  const onClickHeaderItem = (itemIndex) => () => {
    setActive(itemIndex);
  };

  return (
    <div className="tab-control">
      <div className="tab-control-header">
        {tabs.map((item, index) => (
          <div
            key={item.id}
            className={`tab-control-header__item ${index === active ? 'tab-control-header__item_active' : ''}`}
            onClick={onClickHeaderItem(index)}
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
