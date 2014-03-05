div {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
  height: 90%;
  font-size: 20px;
  font-family: arial;
  width: 90%;
  margin: auto auto;
  border-radius: 50%;
  border-right: 9px solid rgba(0,0,0,0.8);
  animation: spinning 20s linear infinite;
  
}
.container {
  width: 300px;
  height: 300px;
}
@keyframes spinning {
  0% {
    transform: rotate(0deg);
    border-right: 9px solid rgba(0,0,0,0.6);
  }
  5% {border-right-color: rgba(0,0,0,0.4)}
  10% {border-right-color: rgba(0,0,0,0.6)}
  15% {border-right-color: rgba(0,0,0,0.4)}
  20% {border-right-color: rgba(0,0,0,0.6)}
  25% {border-right-color: rgba(0,0,0,0.4)}
  30% {border-right-color: rgba(0,0,0,0.6)}
  35% {border-right-color: rgba(0,0,0,0.4)}
  40% {border-right-color: rgba(0,0,0,0.6)}
  45% {border-right-color: rgba(0,0,0,0.4)}
  50% {border-right-color: rgba(0,0,0,0.6)}
  55% {border-right-color: rgba(0,0,0,0.4)}
  60% {border-right-color: rgba(0,0,0,0.6)}
  65% {border-right-color: rgba(0,0,0,0.4)}
  70% {border-right-color: rgba(0,0,0,0.6)}
  75% {border-right-color: rgba(0,0,0,0.4)}
  80% {border-right-color: rgba(0,0,0,0.6)}
  85% {border-right-color: rgba(0,0,0,0.4)}
  90% {border-right-color: rgba(0,0,0,0.6)}
  95% {border-right-color: rgba(0,0,0,0.4)}
  100% {
    transform: rotate(360deg);
    border-right: 9px solid rgba(0,0,0,0.6);
  }
}
