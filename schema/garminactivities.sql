CREATE TABLE garminActivities (
Activity_Id INT AUTO_INCREMENT PRIMARY KEY,
Activity_Type varchar(100),
Activity_Date varchar(100),
Favorite tinyint,
Title varchar(100),
Distance double,
Calories integer,
TotalTime time,
Avg_HR integer,
Max_HR integer,
Avg_Run_Cadence integer,
Max_Run_Cadence integer,
Avg_Pace varchar(100),
Best_Pace varchar(100),
Total_Ascent integer,
Total_Descent integer,
Avg_Stride_Length double,
Avg_Vertical_Ratio double,
Avg_Vertical_Oscillation double,
Avg_Run_Cadence2 integer ,
Max_Run_Cadence2 integer,
Training_Stress_Score double,
Grit double,
Flow double,
Total_Reps integer,
Total_Sets integer,
Dive_Time time,
Min_Temp double,
Surface_Interval double,
Decompression varchar(100),
Best_Lap_Time time,
Number_of_Laps integer,
Max_Temp double,
Moving_Time time,
Elapsed_Time time,
Min_Elevation integer,
Max_Elevation integer)
;