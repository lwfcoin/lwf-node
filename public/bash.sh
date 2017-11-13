#!bin/bash
oldstring='LWF'
newstring='LWF'
grep -rl $oldstring . | xargs sed -i s/$oldstring/$newstring/g

