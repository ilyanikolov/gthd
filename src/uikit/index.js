import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import './uikit-theme.scss';

// loads the Icon plugin
UIkit.use(Icons);

window.UIkit = UIkit;

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');