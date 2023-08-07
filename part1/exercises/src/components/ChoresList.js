import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <div><h2 className={classes.choresHeading}>Chores</h2><p className={classes.choresText}><ul><li>Laundry</li><li>Dishes</li></ul></p></div>;
}