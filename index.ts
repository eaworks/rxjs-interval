import { interval, Observable } from 'rxjs';

console.log('Uygulama basladi');
const subscription = interval(1000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribe');
}, 5000);
