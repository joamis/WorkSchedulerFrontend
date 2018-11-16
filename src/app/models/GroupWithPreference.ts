import {Preference} from './Preference';
import {GroupClass} from './GroupClass';

export class GroupWithPreference
{
  constructor(
    public group: GroupClass,
    public preference: Preference
  ) {}
}
