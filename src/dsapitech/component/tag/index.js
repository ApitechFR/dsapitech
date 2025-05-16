import api from './api.js';
import { TagDismissible } from './script/tag/tag-dismissible.js';
import { TagSelector } from './script/tag/tag-selector.js';
import { TagEvent } from './script/tag/tag-event.js';

api.tag = {
  TagDismissible: TagDismissible,
  TagSelector: TagSelector,
  TagEvent: TagEvent
};

export default api;
