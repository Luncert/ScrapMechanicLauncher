/**
 * Copyright (c) 2021, Guasam
 *
 * This software is provided "as-is", without any express or implied warranty. In no event
 * will the authors be held liable for any damages arising from the use of this software.
 * Read the LICENSE file for more details.
 *
 * @author  : guasam
 * @project : Electron Window
 * @package : Window Controls - Close, Minimize, Maximize (Component)
 */

import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import context from '../titlebarContextApi';
import '@assets/icon/iconfont.css'
import { WINDOW_STATE } from '@common/Constants';

type Props = {
  platform: string;
  tooltips?: boolean;
};

const WindowControls: React.FC<Props> = (props) => {

  const [windowState, setWindowState] = useState(context.fetchWindowState())
  
  useEffect(() => {
    function onResize() {
      setWindowState(context.fetchWindowState())
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [setWindowState]);
  
  return (
    <section
      className={classNames(
        'window-titlebar-controls',
        `type-${props.platform}`,
      )}
    >
      <div
        className='control minimize iconfont iconMinimize'
        onClick={() => setWindowState(context.minimize())}
        title={props.tooltips ? 'Minimize' : null}
      >
      </div>
      <div
        className={'control maximize iconfont ' + (windowState == WINDOW_STATE.MAXIMIZED ? 'iconNormalize' : 'iconMaximize')}
        onClick={() => setWindowState(context.toggle_maximize())}
        title={props.tooltips ? 'Maximize' : null}
      >
      </div>
      <div
        className='control close iconfont iconClose'
        onClick={() => setWindowState(context.exit())}
        title={props.tooltips ? 'Close' : null}
      >
      </div>
    </section>
  );
};

export default WindowControls;
