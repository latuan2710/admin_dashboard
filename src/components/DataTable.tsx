export default function DataTable() {
  return (
    <div className="datatables">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Zero Configuration</h4>
          <p className="card-subtitle mb-3">
            DataTables has most features enabled by default, so all you need to
            do to use it with your own tables is to call the construction
            function:<code>$().DataTable();</code>. You can refer full
            documentation from here
            <a href="https://datatables.net/">Datatables</a>
          </p>
          <div className="table-responsive">
            <table
              id="zero_config"
              className="table table-striped table-bordered text-nowrap align-middle"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-4.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Tiger Nixon</h6>
                    </div>
                  </td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-2.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Garrett Winters</h6>
                    </div>
                  </td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>$170,750</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-3.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Ashton Cox</h6>
                    </div>
                  </td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>$86,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-4.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Cedric Kelly</h6>
                    </div>
                  </td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td>$433,060</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-5.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Airi Satou</h6>
                    </div>
                  </td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-6.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Brielle Williamson</h6>
                    </div>
                  </td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2012/12/02</td>
                  <td>$372,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-7.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Herrod Chandler</h6>
                    </div>
                  </td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>2012/08/06</td>
                  <td>$137,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-8.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Rhona Davidson</h6>
                    </div>
                  </td>
                  <td>Integration Specialist</td>
                  <td>Tokyo</td>
                  <td>55</td>
                  <td>2010/10/14</td>
                  <td>$327,900</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-9.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Colleen Hurst</h6>
                    </div>
                  </td>
                  <td>Javascript Developer</td>
                  <td>San Francisco</td>
                  <td>39</td>
                  <td>2009/09/15</td>
                  <td>$205,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-10.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Sonya Frost</h6>
                    </div>
                  </td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-11.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Jena Gaines</h6>
                    </div>
                  </td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-2.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Quinn Flynn</h6>
                    </div>
                  </td>
                  <td>Support Lead</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2013/03/03</td>
                  <td>$342,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-3.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Charde Marshall</h6>
                    </div>
                  </td>
                  <td>Regional Director</td>
                  <td>San Francisco</td>
                  <td>36</td>
                  <td>2008/10/16</td>
                  <td>$470,600</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-4.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Haley Kennedy</h6>
                    </div>
                  </td>
                  <td>Senior Marketing Designer</td>
                  <td>London</td>
                  <td>43</td>
                  <td>2012/12/18</td>
                  <td>$313,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-5.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Tatyana Fitzpatrick</h6>
                    </div>
                  </td>
                  <td>Regional Director</td>
                  <td>London</td>
                  <td>19</td>
                  <td>2010/03/17</td>
                  <td>$385,750</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-6.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Michael Silva</h6>
                    </div>
                  </td>
                  <td>Marketing Designer</td>
                  <td>London</td>
                  <td>66</td>
                  <td>2012/11/27</td>
                  <td>$198,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-7.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Paul Byrd</h6>
                    </div>
                  </td>
                  <td>Chief Financial Officer (CFO)</td>
                  <td>New York</td>
                  <td>64</td>
                  <td>2010/06/09</td>
                  <td>$725,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-8.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Gloria Little</h6>
                    </div>
                  </td>
                  <td>Systems Administrator</td>
                  <td>New York</td>
                  <td>59</td>
                  <td>2009/04/10</td>
                  <td>$237,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-9.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Bradley Greer</h6>
                    </div>
                  </td>
                  <td>Software Engineer</td>
                  <td>London</td>
                  <td>41</td>
                  <td>2012/10/13</td>
                  <td>$132,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-10.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Dai Rios</h6>
                    </div>
                  </td>
                  <td>Personnel Lead</td>
                  <td>Edinburgh</td>
                  <td>35</td>
                  <td>2012/09/26</td>
                  <td>$217,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-3.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Jenette Caldwell</h6>
                    </div>
                  </td>
                  <td>Development Lead</td>
                  <td>New York</td>
                  <td>30</td>
                  <td>2011/09/03</td>
                  <td>$345,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-2.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Yuri Berry</h6>
                    </div>
                  </td>
                  <td>Chief Marketing Officer (CMO)</td>
                  <td>New York</td>
                  <td>40</td>
                  <td>2009/06/25</td>
                  <td>$675,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-3.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Caesar Vance</h6>
                    </div>
                  </td>
                  <td>Pre-Sales Support</td>
                  <td>New York</td>
                  <td>21</td>
                  <td>2011/12/12</td>
                  <td>$106,450</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-4.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Doris Wilder</h6>
                    </div>
                  </td>
                  <td>Sales Assistant</td>
                  <td>Sidney</td>
                  <td>23</td>
                  <td>2010/09/20</td>
                  <td>$85,600</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-5.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Angelica Ramos</h6>
                    </div>
                  </td>
                  <td>Chief Executive Officer (CEO)</td>
                  <td>London</td>
                  <td>47</td>
                  <td>2009/10/09</td>
                  <td>$1,200,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-6.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Gavin Joyce</h6>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>Edinburgh</td>
                  <td>42</td>
                  <td>2010/12/22</td>
                  <td>$92,575</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-7.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Jennifer Chang</h6>
                    </div>
                  </td>
                  <td>Regional Director</td>
                  <td>Singapore</td>
                  <td>28</td>
                  <td>2010/11/14</td>
                  <td>$357,650</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-8.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Brenden Wagner</h6>
                    </div>
                  </td>
                  <td>Software Engineer</td>
                  <td>San Francisco</td>
                  <td>28</td>
                  <td>2011/06/07</td>
                  <td>$206,850</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-9.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Fiona Green</h6>
                    </div>
                  </td>
                  <td>Chief Operating Officer (COO)</td>
                  <td>San Francisco</td>
                  <td>48</td>
                  <td>2010/03/11</td>
                  <td>$850,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-10.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Shou Itou</h6>
                    </div>
                  </td>
                  <td>Regional Marketing</td>
                  <td>Tokyo</td>
                  <td>20</td>
                  <td>2011/08/14</td>
                  <td>$163,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-11.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Michelle House</h6>
                    </div>
                  </td>
                  <td>Integration Specialist</td>
                  <td>Sidney</td>
                  <td>37</td>
                  <td>2011/06/02</td>
                  <td>$95,400</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-2.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Suki Burks</h6>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>London</td>
                  <td>53</td>
                  <td>2009/10/22</td>
                  <td>$114,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-3.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Prescott Bartlett</h6>
                    </div>
                  </td>
                  <td>Technical Author</td>
                  <td>London</td>
                  <td>27</td>
                  <td>2011/05/07</td>
                  <td>$145,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-4.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Gavin Cortez</h6>
                    </div>
                  </td>
                  <td>Team Leader</td>
                  <td>San Francisco</td>
                  <td>22</td>
                  <td>2008/10/26</td>
                  <td>$235,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-5.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Martena Mccray</h6>
                    </div>
                  </td>
                  <td>Post-Sales support</td>
                  <td>Edinburgh</td>
                  <td>46</td>
                  <td>2011/03/09</td>
                  <td>$324,050</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-6.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Unity Butler</h6>
                    </div>
                  </td>
                  <td>Marketing Designer</td>
                  <td>San Francisco</td>
                  <td>47</td>
                  <td>2009/12/09</td>
                  <td>$85,675</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-7.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Howard Hatfield</h6>
                    </div>
                  </td>
                  <td>Office Manager</td>
                  <td>San Francisco</td>
                  <td>51</td>
                  <td>2008/12/16</td>
                  <td>$164,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-8.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Hope Fuentes</h6>
                    </div>
                  </td>
                  <td>Secretary</td>
                  <td>San Francisco</td>
                  <td>41</td>
                  <td>2010/02/12</td>
                  <td>$109,850</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-9.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Vivian Harrell</h6>
                    </div>
                  </td>
                  <td>Financial Controller</td>
                  <td>San Francisco</td>
                  <td>62</td>
                  <td>2009/02/14</td>
                  <td>$452,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-10.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Timothy Mooney</h6>
                    </div>
                  </td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>37</td>
                  <td>2008/12/11</td>
                  <td>$136,200</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-11.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Jackson Bradshaw</h6>
                    </div>
                  </td>
                  <td>Director</td>
                  <td>New York</td>
                  <td>65</td>
                  <td>2008/09/26</td>
                  <td>$645,750</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-2.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Olivia Liang</h6>
                    </div>
                  </td>
                  <td>Support Engineer</td>
                  <td>Singapore</td>
                  <td>64</td>
                  <td>2011/02/03</td>
                  <td>$234,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-3.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Bruno Nash</h6>
                    </div>
                  </td>
                  <td>Software Engineer</td>
                  <td>London</td>
                  <td>38</td>
                  <td>2011/05/03</td>
                  <td>$163,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-4.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Sakura Yamamoto</h6>
                    </div>
                  </td>
                  <td>Support Engineer</td>
                  <td>Tokyo</td>
                  <td>37</td>
                  <td>2009/08/19</td>
                  <td>$139,575</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-5.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Thor Walton</h6>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2013/08/11</td>
                  <td>$98,540</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-6.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Finn Camacho</h6>
                    </div>
                  </td>
                  <td>Support Engineer</td>
                  <td>San Francisco</td>
                  <td>47</td>
                  <td>2009/07/07</td>
                  <td>$87,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-7.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Serge Baldwin</h6>
                    </div>
                  </td>
                  <td>Data Coordinator</td>
                  <td>Singapore</td>
                  <td>64</td>
                  <td>2012/04/09</td>
                  <td>$138,575</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-8.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Zenaida Frank</h6>
                    </div>
                  </td>
                  <td>Software Engineer</td>
                  <td>New York</td>
                  <td>63</td>
                  <td>2010/01/04</td>
                  <td>$125,250</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-9.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Zorita Serrano</h6>
                    </div>
                  </td>
                  <td>Software Engineer</td>
                  <td>San Francisco</td>
                  <td>56</td>
                  <td>2012/06/01</td>
                  <td>$115,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-10.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Jennifer Acosta</h6>
                    </div>
                  </td>
                  <td>Junior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>43</td>
                  <td>2013/02/01</td>
                  <td>$75,650</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-11.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Cara Stevens</h6>
                    </div>
                  </td>
                  <td>Sales Assistant</td>
                  <td>New York</td>
                  <td>46</td>
                  <td>2011/12/06</td>
                  <td>$145,600</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-2.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Hermione Butler</h6>
                    </div>
                  </td>
                  <td>Regional Director</td>
                  <td>London</td>
                  <td>47</td>
                  <td>2011/03/21</td>
                  <td>$356,250</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-3.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Lael Greer</h6>
                    </div>
                  </td>
                  <td>Systems Administrator</td>
                  <td>London</td>
                  <td>21</td>
                  <td>2009/02/27</td>
                  <td>$103,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-4.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Jonas Alexander</h6>
                    </div>
                  </td>
                  <td>Developer</td>
                  <td>San Francisco</td>
                  <td>30</td>
                  <td>2010/07/14</td>
                  <td>$86,500</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-5.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Shad Decker</h6>
                    </div>
                  </td>
                  <td>Regional Director</td>
                  <td>Edinburgh</td>
                  <td>51</td>
                  <td>2008/11/13</td>
                  <td>$183,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-6.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Michael Bruce</h6>
                    </div>
                  </td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011/06/27</td>
                  <td>$183,000</td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-6">
                      <img
                        src="./assets/images/profile/user-7.jpg"
                        width="45"
                        className="rounded-circle"
                        alt="user-avatar"
                      />
                      <h6 className="mb-0">Donna Snider</h6>
                    </div>
                  </td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
