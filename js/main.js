var score = 0;
var success =0;
var fails =0;
//find percentage score of succes
percent = succes/(success+fails);

//Meter don't know what the fuck any f this is tho so don't ask
<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
2
<script src="jquery.AshAlom.gaugeMeter-2.0.0.min.js"></script>

<div class="GaugeMeter"
2
     data-percent=percent
3
     data-label="Percent"
4
     >
5
</div>

GaugeMeter {
02
  position: Relative;
03
  text-align: Center;
04
  overflow: Hidden;
05
  cursor: Default;
06
  display: inline-block;
07
}
08

09
.GaugeMeter SPAN, .GaugeMeter B {
10
  width: 54%;
11
  position: Absolute;
12
  text-align: Center;
13
  display: Inline-Block;
14
  color: RGBa(0,0,0,.8);
15
  font-weight: 100;
16
  font-family: "Open Sans", Arial;
17
  overflow: Hidden;
18
  white-space: NoWrap;
19
  text-overflow: Ellipsis;
20
  margin: 0 23%;
21
}
22

23
.GaugeMeter[data-style="Semi"] B {
24
  width: 80%;
25
  margin: 0 10%;
26
}
27

28
.GaugeMeter S, .GaugeMeter U {
29
  text-decoration: None;
30
  font-size: .60;
31
  font-weight: 200;
32
  opacity: .6;
33
}
34

35
.GaugeMeter B {
36
  color: #000;
37
  font-weight: 200;
38
  opacity: .8;
39
}
